import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faXmark,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../css/Slide.module.css";

function Slide({ trailerSrc, largeSrc1, largeSrc2, largeSrc3 }) {
  // let [img, setImg] = useState(largeSrc1);
  const img1 = largeSrc1;
  const img2 = largeSrc2;
  const img3 = largeSrc3;
  const [currentImg, setCurrentImg] = useState("");
  const [slider, setSlider] = useState();
  const [trailer, setTrailer] = useState();
  const img = useRef();
  function exit() {
    setSlider("");
    setTrailer("");
  }
  function callTrailer() {
    setTrailer(
      <div className={styles.sliderBackground} onClick={exit}>
        <div className={styles.trailerBox}>
          <iframe
            src={trailerSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className={styles.btnExit}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    );
  }
  function next(xx) {
    xx.stopPropagation();
    console.log(img.src);
  }
  function callSlider(event) {
    setSlider(
      <div className={styles.sliderBackground} onClick={exit}>
        <div className={styles.sliderBox}>
          <img
            className={styles.sliderImg}
            onClick={(event) => event.stopPropagation()}
            src={event.target.src}
            alt=""
            ref={img}
          ></img>
          <button className={styles.btnRight} onClick={next}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button className={styles.btnLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className={styles.btnExit} onClick={exit}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    );
  }
  console.log(img);

  console.log(img.src);
  return (
    <div>
      <div className={styles.cuts}>
        <div className={styles.img1Box}>
          <img
            src={img1}
            className={`${styles.imgs} ${styles.img1}`}
            onClick={callTrailer}
            alt=""
          ></img>
          <span className={styles.playBtn}>
            <span className={styles.playIcon}>
              <FontAwesomeIcon icon={faCirclePlay} />
            </span>
            <span className={styles.playMsg}>Trailer</span>
          </span>
        </div>
        <img src={img2} className={styles.imgs} onClick={callSlider} alt="" />
        <img src={img3} className={styles.imgs} onClick={callSlider} alt="" />
      </div>
      {trailer}
      {slider}
      <button onClick={() => console.log("dd")}>아</button>
    </div>
  );
}

// Slide.propTypes = {
//   src: PropTypes.string.isRequired,
// };

export default Slide;

///컴포넌트 파라미터에는 대괄호가 들어가야 작동한다..ㅠ
