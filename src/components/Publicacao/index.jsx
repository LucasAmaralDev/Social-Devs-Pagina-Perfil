import styles from './style.module.css'

export function Publicacao(props) {
    return (
        <div className={styles.Publicacao}>

            <div className={styles.Publicacao_header}>
                {/* FOTO DE PERFIL */}
                <div className={styles.Publicacao_profile}>
                    <img src={props.img} alt="foto perfil" />
                    <h3>{props.username}</h3>
                </div>
                {/* Data */}
                <div>
                    <p>{props.data}</p>
                </div>
            </div>

            <div className="publicacao-content">
                <p>{props.texto}</p>
            </div>
        </div>
    )
}