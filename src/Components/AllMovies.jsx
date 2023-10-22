import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSimulator from "./LoadingSimulator";
import movieData from "../Database/movieData";
import styles from "../styles.module.css";

const AllMovies = () => {
  const [movieArray, setMovieArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const retrievedListofMovies = movieData;
    setMovieArray(retrievedListofMovies);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  const handleEachMovie = (id) => {
    navigate(id.toString());
  };

  return (
    <>
      {isLoading && <LoadingSimulator />}
      {!isLoading && (
        <>
          <div className={styles.allMovies_title_container}>
            <h2>Movie Catalog</h2>
          </div>

          <div className={styles.movie_wrapper}>
            {movieArray.map((movie) => (
              <div key={movie.id} className={styles.movie_container}>
                <h2>{movie.title}</h2>
                <p>{movie.review}</p>
                <button
                  className={styles.movie_button}
                  onClick={() => {
                    handleEachMovie(movie.id);
                  }}
                >
                  Check Movie
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AllMovies;
