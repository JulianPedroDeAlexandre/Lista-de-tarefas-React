import styles from "../Titulo/Titulo.module.css"

const formatarData = () =>{
    const opcoes = {weekday: "long", day: "numeric", month: "long"};
    return new Date().toLocaleDateString("pt-br", opcoes);
};

const Titulo = ({nome}) => {
  return (
    <header className={styles.container}>
        <h1 className={styles.nome}>{nome}</h1>
        <div className={styles.data}>{formatarData()}</div>
    </header>
  );
};

export default Titulo