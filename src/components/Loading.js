import styles from "../css/Loading.module.css";
function Loading() {
  return (
    <div className={styles.Loading}>
      <div className={styles.msg}>Loading...</div>
    </div>
  );
}

export default Loading;
