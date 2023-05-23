import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { SurvivorList } from "../../components/SurvivorList";

import { getInfectedSurvivors, getSurvivors } from "../../services";
import type { SurvivorProps } from "../../services";
import { InputText } from "../../components/InputText";
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
      <header style={{ display: "flex", flexFlow: "column nowrap", alignItems: "center", gap: '0.5rem', marginBottom: '2rem' }}>
        <h1 style={{ margin: '4rem 0 0' }}>Survivors List</h1>
        <form style={{ display: "flex", alignItems: "center" }}>
          <InputText
            placeholder="Filter Survivors..."
            onChange={handleFilter}
          />
        </form>
      </header>
      <Toggle style={{
        zIndex: 10,
        right: '1rem',
        position: 'absolute',
      }} onChange={handleInfectedToggle} />
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
