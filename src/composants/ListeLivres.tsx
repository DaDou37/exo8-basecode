import type { Livre } from "../types/mediatheque";
import { CarteLivre } from "./CarteLivre";
import './ListeLivres.css';

type ListeLivresProps = {
  livres: Livre[];
};

export function ListeLivres({ livres }: ListeLivresProps) {
    if (livres.length === 0) {
        return <p>Aucun livre disponible.</p>;
    }
    return (
        <div className="liste-livres">
            {livres.map((livre) => (
                <CarteLivre key={livre.id} livre={livre} />
            ))}
        </div>
    );
}
