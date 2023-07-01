import styles from './style.module.css'

export function UserCard(props) {
    return(
        <div className={styles.cardUser}>
            <img src={props.srcimg} alt="Imagem_Perfil" />
            <h3>{props.name}</h3>
        </div>
    )
}

