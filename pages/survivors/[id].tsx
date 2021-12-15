import type { NextPage } from "next";
import { getSurvivor, getSurvivors } from "../../services";
import type { SurvivorProps } from "../../services";

type SurvivorPageProps = { survivor: SurvivorProps };

const SurvivorPage: NextPage<SurvivorPageProps> = ({ survivor }) => {
  return <div>{JSON.stringify(survivor)}</div>;
};

export async function getStaticPaths() {
  const survivors = await getSurvivors();
  const paths: StaticProps[] = survivors.map(({ id }) => ({
    params: { id: `${id}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

type StaticProps = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params: { id } }: StaticProps) {
  const survivor = await getSurvivor(+id);

  return {
    props: { survivor },
  };
}

export default SurvivorPage;
