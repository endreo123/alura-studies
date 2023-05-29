import { ITarefas } from '../../../interfaces/tarefas'
import style from '../Lista.module.scss'

export const Item = ({tarefa, tempo}: ITarefas) => {

    return (                    
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}