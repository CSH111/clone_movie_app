import Movie from "../components/Movie";
import Header from "../components/Header";
import styles from "../css/Home.module.css";
import { useEffect, useState } from "react";
function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year&limit=20"
      )
    ).json();
    setMovies(json.data.movies);

    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <Header />
          <h1>Loading..</h1>
        </div>
      ) : (
        <div>
          <Header />
          <div className={styles.container}>
            {" "}
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                medium_cover_image={movie.medium_cover_image}
                genres={movie.genres}
                rating={movie.rating}
                year={movie.year}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;

//  async await 사용시 해당 작업 진행중에 다른작업 선 진행
// ->  외부 API 데이터가 useState를 사용해야만 렌더링 되는이유
