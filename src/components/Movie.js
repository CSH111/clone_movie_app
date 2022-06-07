import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ id, title, medium_cover_image, genres, year, rating }) {
  const addOn = useRef();
  let [onOff, setOnOff] = useState(false);
  const addOnOn = function () {
    setOnOff(true);
  };
  const addOnOff = function () {
    setOnOff(false);
  };
  return (
    <div className={styles.movie}>
      <div
        className={`${styles.imgBox} ${onOff ? styles.on : ""}`}
        onMouseEnter={addOnOn}
        onMouseLeave={addOnOff}
      >
        <img src={medium_cover_image} alt="" />
        <div
          className={`${styles.addOn} ${onOff ? styles.on : ""}`}
          ref={addOn}
        >
          <div>{rating} / 10</div>
          <ul>
            {genres.map((gr) => (
              <li key={gr}>{gr}</li>
            ))}
          </ul>

          <Link to={`/movie/${id}`}>
            <button>View Datails</button>
          </Link>
        </div>
      </div>
      <div className={styles.titleBox}>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div className={styles.year}>{year}</div>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
