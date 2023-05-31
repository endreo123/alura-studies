import { useState } from "react";
import { Cronometro } from "../components/Cronometro";
import { Formulario } from "../components/Formulario";
import { Lista } from "../components/Lista";
import style from './App.module.scss'
import { ITarefas } from "../interfaces/tarefas";

export default function App() {
  const [tarefas, setTarefas] = useState< ITarefas[] > ([]);
  const [selecionado , setSelecionado] = useState<ITarefas>()

  const selecionaTarefa = (tarefaSelecionada: ITarefas) => {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map( tarefa => ({
            ...tarefa,
            selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
          }
        )
      )
    )
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}  
      />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}
