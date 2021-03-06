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

function Slide({ trailerSrc, largeSrcs, mediumSrc1, mediumSrc2, mediumSrc3 }) {
  const [trailer, setTrailer] = useState();
  const [currentIndex, setCurrentIndex] = useState("");
  const [onOff, setonOff] = useState(false);
  const img = useRef();
  function exit() {
    setonOff(false);
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
  function next(event) {
    event.stopPropagation();
    currentIndex < 2
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(currentIndex - 2);
    // setCurrentIndex(img.current.src.slice(-5, -4));
  }
  function prev(event) {
    event.stopPropagation();
    currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : setCurrentIndex(currentIndex + 2);
    // setCurrentIndex(img.current.src.slice(-5, -4));
  }
  function callSlider(event) {
    onOff ? setonOff(false) : setonOff(true);

    setCurrentIndex(event.target.src.slice(-5, -4) - 1);
  }

  return (
    <div>
      <div className={styles.cuts}>
        <div className={styles.img1Box}>
          <img
            src={mediumSrc1}
            className={`${styles.imgs} ${styles.img1}`}
            onClick={callTrailer}
            alt=""
          ></img>
          <div className={styles.playBtn}>
            <FontAwesomeIcon className={styles.playIcon} icon={faCirclePlay} />

            <div className={styles.playMsg}>Trailer</div>
          </div>
        </div>
        <img
          src={mediumSrc2}
          className={styles.imgs}
          onClick={callSlider}
          alt=""
        />
        <img
          src={mediumSrc3}
          className={styles.imgs}
          onClick={callSlider}
          alt=""
        />
      </div>
      {trailer}
      <div
        className={
          onOff
            ? styles.sliderBackground
            : `${styles.sliderBackground} ${styles.hidden}`
        }
        onClick={exit}
      >
        <div className={styles.sliderBox}>
          <img
            className={styles.sliderImg}
            onClick={(event) => event.stopPropagation()}
            src={largeSrcs[currentIndex]}
            alt=""
            ref={img}
          ></img>
          <button className={styles.btnRight} onClick={next}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button className={styles.btnLeft} onClick={prev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className={styles.btnExit} onClick={exit}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Slide.propTypes = {
//   src: PropTypes.string.isRequired,
// };

export default Slide;

///???????????? ?????????????????? ???????????? ???????????? ????????????..???
// dom?????? ?????? ?????? ref ??? ??????.current.~~~
// ???????????? ??????????????? ???????????? state ???????????????(??????1) ??? ???????????? ????????????(??????2)?????? ??????1 ????????? ???????????? ????????? state?????? ????????? ?????? ??????
// ?????? ??????????????? -> display:none ???????????? ????????? ??????..
// ???????????? ?????? ????????? ?????? ??? ?????? ??????
