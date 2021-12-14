import type { NextPage } from "next";
import Survivor from "../../components/Survivor/survivor";
import { getSurvivors, SurvivorProps } from "../../services";

export async function getStaticProps() {
  const survivors = await getSurvivors();
  return {
    props: { survivors },
  };
}

type SurvivorsPageProps = { survivors: SurvivorProps[] };

const SurvivorsPage: NextPage<SurvivorsPageProps> = ({ survivors }) => {
  return (
    <>
      {survivors ? (
        survivors.map((survivorProps) => (
          <Survivor key={survivorProps.id} {...survivorProps} />
        ))
      ) : (
        <div>There are no survivors.</div>
      )}
    </>
  );
};

export default SurvivorsPage;
