import styles from "./styles.module.css"


export function Publicar() {

    function receberData() {
        const dataAtual = new Date();

        const ano = dataAtual.getFullYear();
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
        const dia = String(dataAtual.getDate()).padStart(2, '0');

        return `${ano}-${mes}-${dia}`;
    }

    async function publicar() {
        const texto = document.getElementById("textpost").value;
        const data = receberData()
        let resposta = "";

        const retorno =await fetch("http://35.169.253.30:8080/create-post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ "description": texto, "date": data })
        })

        resposta = await retorno.json();
        if (resposta.newPost){
            // alert("Postado com sucesso!")
            window.location.href = "./"
        }

    }

    return (
        <div className={styles.absoluto}>
            <h3>Nova Publicação</h3>
            <form>
                <textarea placeholder="No que voce esta pensando..." id="textpost" cols="30" rows="3" maxLength="80"></textarea>
            </form>
            <button onClick={publicar}>Publicar</button>
        </div>
    )
}