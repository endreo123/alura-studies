import React, { useState } from "react";
import { Botao } from "../Botao";
import style from './Formulario.module.scss'
import { ITarefas } from "../../interfaces/tarefas";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

export const Formulario = ({setTarefas}: Props) => {

    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    const AdicionarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );

        setTarefa("");
        setTempo("00:00");
    }

    return(
        <form onSubmit={AdicionarTarefa} className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    placeholder="O que você quér estudar"
                    required
                >
                </input>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step='1'
                    name="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                >
                </input>
            </div>
            <Botao 
                texto="Adicionar"
                type="submit"
            />
        </form>
    )
}