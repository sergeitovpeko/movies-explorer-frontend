import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import useResize from "../../hooks/useResize";
import { useLocation } from "react-router-dom";

function MoviesCardList({ cards, isLiked, onLikeClick, onDeleteClick }) {
  const location = useLocation()
  const { isScreenLarge, isScreenMedium } = useResize();
  let num;
  function getCardsNumber() {
    if (isScreenLarge) {
      return (num = 16);
    } else if (isScreenMedium) {
      return (num = 8);
    } else {
      return (num = 5);
    }
  }
  const cardElements = cards
    .slice(0, getCardsNumber(num))
    .map((card) => (
      <MoviesCard
        key={card._id}
        card={card}
        isLiked={isLiked}
        onLikeClick={onLikeClick}
        onDeleteClick={onDeleteClick}
      />
    ));

  return (
    <section className="movies-cardlist">
      <ul className="movies-cardlist__movies-grid">
        {cardElements}
      </ul>
      <div className="preloader">
        {location.pathname === "/movies" && <button type="button" className="preloader__button app__button">
          Ещё
        </button>}
      </div>
    </section>

  );
}

export default MoviesCardList;
