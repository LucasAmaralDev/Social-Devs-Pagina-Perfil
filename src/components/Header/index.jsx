import { useState } from 'react'
import styles from './styles.module.css'
import { Publicar } from '../Actions/Publicar'

export function Header(props) {
    const [open, setOpen] = useState(false)

    const [menupublicar, setMenupublicar] = useState(false)

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

    function gerir_publicar() {
        if (menupublicar === false) {
            setMenupublicar(true)
            return
        }
        setMenupublicar(false)
    }



    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <h1>Social Devs</h1>
            </div>
            <button onClick={abrir_menu}>  Menu  </button>
            <ul className={styles.sidebarmenu}>
                <li>Inicio</li>
                <li onClick={gerir_publicar}>Nova Publicação</li>
                <li>Perfil</li>
                <li>Sair</li>
            </ul>
            {menupublicar ? <Publicar /> : null}
            
        </div>
    )
}