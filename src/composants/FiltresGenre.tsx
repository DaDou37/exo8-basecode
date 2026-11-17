import './FiltresGenre.css';
import type { Genre } from '../types/mediatheque';
import { GENRES } from '../data/genres';

type FiltresGenreProps = {
  genreSelectionne: Genre | 'all';
  onGenreChange: (genre: Genre | 'all') => void;
};

export function FiltresGenre({
  genreSelectionne,
  onGenreChange
}: FiltresGenreProps) {
  return (
    <div className="champ">
      <label className="visuellement-cache" htmlFor="genre-filter">
        Filtrer par genre
      </label>

      <select
        className="champ__saisie"
        id="genre-filter"
        name="genre"
        value={genreSelectionne}
        onChange={(e) => onGenreChange(e.target.value as Genre | 'all')}
      >
        <option value="all">Tous les genres</option>

        {GENRES.map((genre) => (
          <option key={genre.code} value={genre.code}>
            {genre.libelle}
          </option>
        ))}
      </select>
    </div>
  );
}