
import { LIVRES_MOCK } from './data/livres-mock';
import { EnTete } from './composants/EnTete';
import { Section } from './composants/Section';
import { PiedDePage } from './composants/PiedDePage';

export function App() {
  return (
    <>
      <EnTete />
      <Section livres={LIVRES_MOCK} />
      <PiedDePage />
    </>
  );
}
