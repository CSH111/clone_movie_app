import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title_long, medium_cover_image, genres, summary }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title_long}</Link>
      </h2>

      <img src={medium_cover_image} alt="" />
      <ul>
        {genres.map((gr) => (
          <li key={gr}>{gr}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title_long: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired,
};
export default Movie;
