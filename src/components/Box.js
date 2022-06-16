import styles from "../css/Box.module.css";
function Box({ title, contents }) {
  return (
    <div className={styles.box}>
      <h3>{title}</h3>
      <hr />
      <p>{contents}</p>
    </div>
  );
}

export default Box;
