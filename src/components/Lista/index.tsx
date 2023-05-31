import { Item } from './Item';
import style from './Lista.module.scss';
import { ITarefas } from '../../interfaces/tarefas';

interface Props {
    tarefas: ITarefas[],
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

export const Lista = ({tarefas, selecionaTarefa}: Props) => {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map( (item) => (
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}