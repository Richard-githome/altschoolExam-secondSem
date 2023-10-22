import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import movieData from "../Database/movieData";
import styles from "../styles.module.css";
import LoadingSimulator from "./LoadingSimulator";

const EachMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const index = +id;

  useEffect(() => {
    const returnedMovie = movieData.moviesArray.find(
      (movy) => movy.id === index
    );
    setMovie(returnedMovie);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [index]);

  const navigate = useNavigate();
  const handleBackToMovies = () => {
    navigate("/movies");
  };

  return (
    <>
      {isLoading && <LoadingSimulator />}
      {!isLoading && (
        <div className={styles.eachPost_wrapper}>
          <button
            className={styles.movie_button}
            onClick={() => handleBackToMovies()}
          >
            Go Back to Movies
          </button>
          <h2>Title: {movie.title}</h2>
          <small>Date of Publication: {movie.pob}</small>
          <h3>{movie.briefing}</h3>
          <p>Highlight: {movie.highlight}</p>
          <h5>
            Genre: <em>{movie.genre}</em>
          </h5>
        </div>
      )}
    </>
  );
};

export default EachMovie;
