import type { NextPage } from "next";
import ROUTES from "../../routes";
import { getSurvivor, getSurvivors } from "../../services";
import type { SurvivorProps } from "../../services";

type SurvivorPageProps = { survivor: SurvivorProps };

const SurvivorPage: NextPage<SurvivorPageProps> = ({ survivor }) => {
  return <div>{JSON.stringify(survivor)}</div>;
};

export async function getStaticPaths() {
  const survivors = await getSurvivors();

  const paths = survivors.map(
    ({ id }: SurvivorProps) => `${ROUTES.SURVIVORS}/${id}`
  );

  return {
    paths,
    fallback: false,
  };
}

type StaticProps = {
  params: {
    id: number;
  };
};

export async function getStaticProps({ params: { id } }: StaticProps) {
  const survivor = await getSurvivor(+id);

  return {
    props: { survivor },
  };
}

export default SurvivorPage;
