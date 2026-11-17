
import { useState } from 'react';
import './EnTete.css';

export function EnTete() {
    const [menuOuvert, setMenuOuvert] = useState(false);

    return (
        <header className="en-tete">
            <h1>Médiathèque</h1>

            <button
                className="menu-burger"
                type="button"
                aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOuvert}
                onClick={() => setMenuOuvert(!menuOuvert)}
            >
                {menuOuvert ? '✕' : '☰'}
            </button>

            <nav className={menuOuvert ? 'navigation ouverte' : 'navigation'}>
                <a href="#">Accueil</a>
                <a href="/Catalogue">Catalogue</a>
                <a href="/APropos">À propos</a>
            </nav>
        </header>
    );
}
