
import styles from './styles.module.css'

export function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <h1>Social Devs</h1>
            </div>
            <ul className={styles.container}>
                <li>Inicio</li>
                <li>Noticias</li>
                <li>Perfil</li>
                <li>Sair</li>
            </ul>
        </div>
    )
}