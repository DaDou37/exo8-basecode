import './FiltresGenre.css';


export function FiltresGenre() {
  return (
    <div className="champ">
      <label className="visuellement-cache" htmlFor="genre-filter">
        Filtrer par genre
      </label>

      <select
        className="champ__saisie"
        id="genre-filter"
        name="genre"
        defaultValue="all"
      >
        <option value="all">Tous les genres</option>
        <option value="ROMAN">Roman</option>
        <option value="JEUNESSE">Jeunesse</option>
        <option value="BANDE_DESSINEE">Bande dessinée</option>
        <option value="DOCUMENTAIRE">Documentaire</option>
        <option value="POESIE">Poésie</option>
        <option value="SCIENCE_FICTION">Science-fiction</option>
      </select>
    </div>
  );
}