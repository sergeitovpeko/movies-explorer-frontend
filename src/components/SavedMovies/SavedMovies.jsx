import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ savedMoviesList, onDeleteClick }) {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList cards={savedMoviesList} onDeleteClick={onDeleteClick} />
    </main>
  );
}

export default SavedMovies;
