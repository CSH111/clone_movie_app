import Header from "../components/Header";
import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Detail() {
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getDetails = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
      )
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  console.log(details);
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      {loading === true ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <Header />
          <Movie
            key={details.id}
            id={details.id}
            title={details.title}
            medium_cover_image={details.medium_cover_image}
            genres={details.genres}
            rating={details.rating}
            year={details.year}
          ></Movie>
          <p>{details.description_full}</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${details.yt_trailer_code}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
export default Detail;
