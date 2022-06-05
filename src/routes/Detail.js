import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Detail() {
  const { id } = useParams();
  const getDetails = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
      )
    ).json();
    console.log(json.data.movie);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return <h1>Detail</h1>;
}
export default Detail;
