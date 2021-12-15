import type { NextPage } from "next";

import SurvivorList from "../../components/SurvivorList/survivor-list";

import { getSurvivors } from "../../services";
import type { SurvivorProps } from "../../services";

export async function getStaticProps() {
  const survivors = await getSurvivors();
  return {
    props: { survivors },
  };
}

type SurvivorsPageProps = { survivors: SurvivorProps[] };

const SurvivorsPage: NextPage<SurvivorsPageProps> = ({ survivors }) => {
  return (
    <main>
      <h1>Survivors List</h1>
      <SurvivorList survivors={survivors} />
    </main>
  );
};

export default SurvivorsPage;
