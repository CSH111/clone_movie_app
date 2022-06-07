import Header from "../components/Header";
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
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <Header />
          <div>{details.rating}</div>
          <div>{details.title_long}</div>
          <div>{details.runtime}</div>

          <ul>
            {details.cast.map((zz) => (
              <li>{zz.name}</li>
            ))}
          </ul>

          <img src={details.medium_cover_image} alt="" />
          <p>{details.description_full}</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${details.yt_trailer_code}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
export default Detail;
