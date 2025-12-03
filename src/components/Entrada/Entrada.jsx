import styles from "./Entrada.module.css"
const Entrada = () => {
  return (
    <input type="text"
    className={styles.input}
    placeholder="Digite uma tarefa..."
    name="conteudo"
    />
  );
};

export default Entrada