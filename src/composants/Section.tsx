
import './Section.css';

import type { Livre } from '../types/mediatheque';
import { Recherche } from './Recherche';
import { FiltresGenre } from './FiltresGenre';
import { ListeLivres } from './ListeLivres';

type SectionProps = {
  livres: Livre[];
};

export function Section({ livres }: SectionProps) {
  return (
    <main>
      <section className="catalogue" aria-labelledby="catalogue-title">
        <h1 id="catalogue-title">Catalogue de nos livres</h1>

        <form className="filtres" role="search">
          <Recherche />
          <FiltresGenre />
        </form>

        <p className="nombre-livres">
          {livres.length} livres dans le catalogue
        </p>

        <p className="catalogue-message"></p>

        <button className="bouton bouton--secondaire retry-button" type="button" hidden>
          Réessayer
        </button>

        <ListeLivres livres={livres} />

        <button className="bouton bouton--primaire afficher-plus" type="button">
          Afficher plus
        </button>
      </section>
    </main>
  );
}
