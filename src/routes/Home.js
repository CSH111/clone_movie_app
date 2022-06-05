import Movie from "../components/Movie";
import { useEffect, useState } from "react";
function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    console.log(movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((item) => (
              <Movie
                key={item.id}
                id={item.id}
                title_long={item.title_long}
                medium_cover_image={item.medium_cover_image}
                genres={item.genres}
                summary={item.summary}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;

//  async await 사용시 해당 작업 진행중에 다른작업 선 진행
// ->  외부 API 데이터가 useState를 사용해야만 렌더링 되는이유
