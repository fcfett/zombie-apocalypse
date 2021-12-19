import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { SurvivorList } from "../../components/SurvivorList";

import { getInfectedSurvivors, getSurvivors } from "../../services";
import type { SurvivorProps } from "../../services";
import { Toggle } from "../../components/Toggle";

export async function getStaticProps() {
  const survivors = await getSurvivors();
  return {
    props: { survivors },
  };
}

type SurvivorsPageProps = { survivors: SurvivorProps[] };

const SurvivorsPage: NextPage<SurvivorsPageProps> = ({ survivors }) => {
  const [infectedSurvivors, setInfectedSurvivors] = useState<string[]>([]);
  const [hasInfectedFilter, setHasInfectedFilter] = useState(false);
  const [survivorsList, setSurvivorsList] = useState(survivors);

  useEffect(() => {
    setInfectedSurvivors(getInfectedSurvivors());
  }, []);

  const handleFilter = (e: unknown) => {
    const { target } = e as Event;
    const value = (target as HTMLInputElement).value;

    if (!value) {
      setSurvivorsList(survivors);
    } else {
      setSurvivorsList(
        survivors.filter(({ firstName, lastName }) =>
          `${firstName} ${lastName}`.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleInfectedToggle = (e: unknown) => {
    const { target } = e as Event;
    const checked = (target as HTMLInputElement).checked;
    setHasInfectedFilter(checked);
  };

  return (
    <main>
      <header style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <h1>Survivors List</h1>
        <form style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Filter Survivors"
            onChange={handleFilter}
          />
          <Toggle onChange={handleInfectedToggle} />
        </form>
      </header>
      <SurvivorList
        survivors={
          hasInfectedFilter
            ? survivorsList.filter(({ slug }) =>
                infectedSurvivors.includes(slug)
              )
            : survivorsList
        }
      />
    </main>
  );
};

export default SurvivorsPage;
