import styles from "./Campo.module.css"

const Campo = ({children}) => {
  return (
  <section className={styles.container}>{children}</section>
  );
};

export default Campo