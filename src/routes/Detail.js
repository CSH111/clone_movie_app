import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../css/Details.module.css";
function Detail() {
  const [details, setDetails] = useState([]);
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
        <div>
          <Header />
          <h1>Loading..</h1>
        </div>
      ) : (
        <div>
          <Header />
          <div className={styles.contents}>
            <div className={styles.upperContents}>
              <img src={details.medium_cover_image} alt="" />

              <div className={styles.infoAndCast}>
                <div className={styles.info}>
                  <h1>{details.title}</h1>
                  <div>{details.year}</div>
                  <ul className={styles.genres}>
                    {details.genres.map((gr) =>
                      gr != details.genres.slice(-1)[0] ? (
                        <li key={gr}>{gr} /&nbsp;</li>
                      ) : (
                        <li key={gr}>{gr}</li>
                      )
                    )}
                  </ul>
                  <div>{details.rating} / 10</div>
                  <div>{details.runtime} min</div>
                </div>
                <ul className={styles.cast}>
                  {details.cast &&
                    details.cast.map((actor) => (
                      <li key={actor.name}>{actor.name}</li>
                    ))}
                </ul>
              </div>
            </div>
            <div className={styles.plot}>
              <h3>Plot summary</h3>
              <p>{details.description_full}</p>
            </div>
            <div>
              {" "}
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${details.yt_trailer_code}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <img src={details.medium_screenshot_image1} alt="" />
              <img src={details.medium_screenshot_image2} alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;

// summary 내 작은따옴표 파싱 안된채로 &#39; 형태로 넘어옴...
