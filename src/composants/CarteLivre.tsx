import type { Livre } from '../types/mediatheque';
import './CarteLivre.css';

type CarteLivreProps = {
  livre: Livre;
};

export function CarteLivre({ livre }: CarteLivreProps) {
  const estDisponible = livre.disponibles > 0;

  return (
    <article className="carte-livre">
      <h3>{livre.titre}</h3>
      <p>Auteur : {livre.auteur}</p>
      <p>Année : {livre.annee}</p>
      <p>Disponibles : {livre.disponibles}</p>
      <p>Statut : {estDisponible ? 'Disponible' : 'Indisponible'}</p>
      <div className="book-actions">
        <button className="bouton bouton--primaire" disabled={!estDisponible} type="button">
          Réserver
        </button>
        <button className="bouton bouton--secondaire" type="button">
          Voir plus
        </button>
      </div>
    </article>
  );
}
