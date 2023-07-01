import styles from './styles.module.css'


export function Atividades(props) {
    return (
        <div className={styles.cardAtividade}>
            <h3>{props.atividade}</h3>
            <p>{props.data}</p>
        </div>
    )
}