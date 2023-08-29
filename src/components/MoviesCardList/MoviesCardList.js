import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"

export default function MoviesCardList(props) {

  const numOfMovies = props.isSaved ? 3 : 5;
  const rows = [];
  for(let i=0; i<numOfMovies; i++) {
    rows.push(MoviesCard(props.isSaved));
  };

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {rows}
      </div>
      <button className="movies-card-list__button button" type="button">Ещё</button>
    </section>
  )
}