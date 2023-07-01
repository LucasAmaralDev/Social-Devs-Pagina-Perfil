import { useState } from 'react'
import styles from './styles.module.css'

export function Header(props) {
    const [open, setOpen] = useState(true)

    function abrir_menu() {
        if (open === false) {
            setOpen(true)
        }
        else {
            setOpen(false)
        }
        if (open === true) {
            document.getElementsByClassName(styles.sidebarmenu)[0].style.visibility = 'visible'
        }   else {
            document.getElementsByClassName(styles.sidebarmenu)[0].style.visibility = 'hidden'
        }

    }

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <h1>Social Devs</h1>
            </div>
            <button onClick={abrir_menu}>  Menu  </button>
            <ul className={styles.sidebarmenu}>
                <li>Inicio</li>
                <li>Noticias</li>
                <li>Perfil</li>
                <li>Sair</li>
            </ul>
        </div>
    )
}