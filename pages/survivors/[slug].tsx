import { useState, useEffect } from "react";
import type { NextPage } from "next";

import {
  getInfectedSurvivors,
  getSurvivor,
  getSurvivors,
  toggleInfectedSurvivor,
} from "../../services";
import type { SurvivorProps } from "../../services";

type SurvivorPageProps = { survivor: SurvivorProps };

const SurvivorPage: NextPage<SurvivorPageProps> = ({ survivor }) => {
  const [isInfected, setIsInfected] = useState(survivor.isInfected);
  const [isLoaded, setIsLoaded] = useState(false);
  const { slug } = survivor;

  useEffect(() => {
    const isInfected = getInfectedSurvivors().includes(slug);
    setIsInfected(isInfected);
    setIsLoaded(true);
  }, [slug]);

  const handleIsInfected = (e: unknown) => {
    const { target } = e as Event;
    const checked = (target as HTMLInputElement).checked;
    toggleInfectedSurvivor(slug, checked);
  };

  return (
    <>
      <div>{JSON.stringify(survivor)}</div>
      {isLoaded ? (
        <>
          <input
            type="checkbox"
            name="is-infected"
            id="is-infected"
            onChange={handleIsInfected}
            defaultChecked={isInfected}
          />
          <label htmlFor="is-infected">Is infected</label>
        </>
      ) : null}
    </>
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
