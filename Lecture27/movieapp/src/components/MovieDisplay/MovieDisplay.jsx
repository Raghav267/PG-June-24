import styles from "./MovieDisplay.module.css";

function MovieDisplay({ img }) {
  return (
    <div className={styles.divClass}>
      <img src={img} className={styles.imgClass} />
    </div>
  );
}

export default MovieDisplay;
