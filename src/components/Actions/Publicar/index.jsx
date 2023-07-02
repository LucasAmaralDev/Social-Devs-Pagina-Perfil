import styles from "./styles.module.css"


export function Publicar(){

    function publicar(){
        const texto = document.getElementById("textpost").value;
    }

    return(
        <div className={styles.absoluto}>
            <h3>Nova Publicação</h3>
            <form>
                <textarea placeholder="No que voce esta pensando..." id="textpost" cols="30" rows="3" maxLength="80"></textarea>
            </form>
                <button onClick={publicar}>Publicar</button>
        </div>
    )
}