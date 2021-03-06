import type { NextPage } from "next";

import { getSurvivor, getSurvivors } from "../../services";
import type { SurvivorProps } from "../../services";

import { SurvivorDetail } from "../../components/SurvivorDetail";
import { BackButton } from "../../components/BackButton";

type SurvivorPageProps = { survivor: SurvivorProps };

const SurvivorPage: NextPage<SurvivorPageProps> = ({ survivor }) => {
  return (
    <main>
      <BackButton />
      <SurvivorDetail {...survivor} />
    </main>
  );
};

export async function getStaticPaths() {
  const survivors = await getSurvivors();
  const paths: StaticProps[] = survivors.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

type StaticProps = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const survivor = await getSurvivor(slug);

  return {
    props: { survivor },
  };
}

export default SurvivorPage;
