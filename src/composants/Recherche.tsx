import './Recherche.css';

export function Recherche() {
  return (
    <div className="champ">
      <label className="visuellement-cache" htmlFor="book-search">
        Rechercher un livre
      </label>

      <input
        className="champ__saisie"
        id="book-search"
        name="search"
        type="search"
        placeholder="Rechercher un livre..."
      />
    </div>
  );
}