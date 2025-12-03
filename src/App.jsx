import Campo from "./components/Campo/Campo"
import Conteudo from "./components/Conteudo/Conteudo";
import Entrada from "./components/Entrada/Entrada";
import Titulo from "./components/Titulo/Titulo"
import { useState } from "react";
import "./globals/style.css"
function App() {
const [lista, setLista] = useState([])

const adicionar = (evento) =>{
  evento.preventDefault();
  const valor = evento.target.conteudo.value;

  if (valor.trim() === "") return;

  setLista([...lista, valor]);
  evento.target.reset();

};

  return (
    <>
     <Titulo nome="Lista de tarefas"/>

     <Campo>
      <form onSubmit={adicionar}>
      <Entrada/>
      </form>
     </Campo>

     <Campo>
        {lista.map((item, index)=> (
          <Conteudo key={index} texto={item}/>
        ))}
     </Campo>
    </>
  );
};

export default App
