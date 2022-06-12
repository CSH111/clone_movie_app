import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "../css/Slide.module.css";

function Slide({ smallSrc }) {
  let [img, setImg] = useState(smallSrc);
  let [onOff, setOnOff] = useState(false);

  // function next() {
  //   console.log("go");
  //   setImg(src.replace("1", "2"));
  // }
  const [slider, setSlider] = useState();
  function callSlider() {
    setSlider(<img src={smallSrc.replace("medium", "large")} alt="" />);
  }
  return (
    <div>
      <img
        src={img}
        className={`${styles.smallStealcut}`}
        onClick={callSlider}
        alt=""
      />
      {/* <button onClick={next}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button> */}
      <div>{slider}</div>{" "}
    </div>
  );
}

Slide.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Slide;

///컴포넌트 파라미터에는 대괄호가 들어가야 작동한다..ㅠ
