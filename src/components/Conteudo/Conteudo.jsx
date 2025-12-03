import { useState } from "react"
import styles from "./Conteudo.module.css"

const Conteudo = ({texto}) => {
    const[feito, setFeito] = useState(false);

    const alternar = () =>{
        setFeito(!feito);

    };

  return (
    <div
    className={`${styles.item} ${feito ? styles.feito : ""}`}
    onClick={alternar}
    >
        {texto}
    </div>
  );
};

export default Conteudo