import React from "react";
import { Botao } from "../Botao";
import style from './Formulario.module.scss'
import { ITarefas } from "../../interfaces/tarefas";
import { v4 as uuidv4 } from 'uuid';

export class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00",
    }

    AdicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );

        this.setState({
            tarefa: "",
            tempo: "00:00:00"
        })
    }

    render(): React.ReactNode {
        return (
            <form onSubmit={this.AdicionarTarefa.bind(this)} className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
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
                    value={this.state.tempo}
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
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
}