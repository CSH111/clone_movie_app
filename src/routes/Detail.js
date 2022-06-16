import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../css/Details.module.css";
import avatar from "../image/default_avatar.jpg";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Slide from "../components/Slide";
import Box from "../components/Box";

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
          <Loading />
        </div>
      ) : (
        <div>
          <Header />
          <div className={styles.contents}>
            <div className={styles.upperContents}>
              <img src={details.medium_cover_image} alt="" />

              <div className={styles.title}>
                <h1>{details.title}</h1>
                <div>{details.year}</div>
              </div>
              <div className={styles.castBox}>
                <Box
                  title={"Top Cast"}
                  contents={
                    details.cast &&
                    details.cast.map((actor) => (
                      <li key={actor.name}>
                        {actor.url_small_image ? (
                          <img src={actor.url_small_image} alt="" />
                        ) : (
                          <img src={avatar} alt="react" />
                        )}

                        <div>{actor.name}</div>
                      </li>
                    ))
                  }
                ></Box>
              </div>
              <div className={styles.genresAndInfo}>
                <div className={styles.genres}>
                  <Box
                    title={"Genres"}
                    contents={
                      <ul>
                        {details.genres.map((gr) => (
                          <li key={gr}>{gr}</li>
                        ))}
                      </ul>
                    }
                  ></Box>
                </div>
                <Box
                  title={"Info"}
                  contents={
                    <ul>
                      <li>rating : {details.rating} / 10</li>
                      <li>runtime : {details.runtime} min</li>
                    </ul>
                  }
                ></Box>
              </div>

              <div className={styles.plot}>
                <Box
                  title={"Plot summary"}
                  contents={details.description_full}
                ></Box>
              </div>
            </div>

            <div className={styles.slide}>
              <Slide
                trailerSrc={`https://www.youtube.com/embed/${details.yt_trailer_code}`}
                mediumSrc1={details.medium_screenshot_image1}
                mediumSrc2={details.medium_screenshot_image2}
                mediumSrc3={details.medium_screenshot_image3}
                largeSrcs={[
                  details.large_screenshot_image1,
                  details.large_screenshot_image2,
                  details.large_screenshot_image3,
                ]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;

// summary 내 작은따옴표 파싱 안된채로 &#39; 형태로 넘어옴...
