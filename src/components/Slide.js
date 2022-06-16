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

///컴포넌트 파라미터에는 대괄호가 들어가야 작동한다..ㅠ
// dom요소 제어 할때 ref 후 변수.current.~~~
// 조건부로 엘리먼트를 생성하는 state 사용했더니(함수1) 그 외부에서 작동하는(함수2)에서 함수1 내부의 엘리먼트 요소를 state해도 렌더링 되지 않음
// 생성 여부없애고 -> display:none 제어하는 식으로 해결..
// 슬라이더 내부 이미지 로딩 중 표시 구현
