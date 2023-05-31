import { Botao } from "../Botao"
import { Relogio } from "./Relogio"
import style from './Cronometro.module.scss'
import { DateUtils } from "../../common/utils/date"
import { ITarefas } from "../../interfaces/tarefas"
import { useState } from "react"

interface Props{
    selecionado: ITarefas | undefined
}

export const Cronometro = ({selecionado}: Props) => {
    const [tempo, setTempo] = useState<number>()
    
    if( selecionado?.tempo) {
        setTempo(DateUtils.tempoParaSegundos(selecionado.tempo))
    }
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao 
                texto="Começar!"
            />
        </div>
    )
}
