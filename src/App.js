import { Header } from "./components/Header";
import { UserCard } from "./components/UserCard";
import { PersonalInfo } from "./components/PersonalInfo";
import { Atividades } from "./components/Atividades";
import { Publicacao } from "./components/Publicacao";


import './style.css'


function App() {
  const username = "Lucas Henrique";
  const profileImg = "https://media.licdn.com/dms/image/D4D03AQFewEXNBK_63w/profile-displayphoto-shrink_400_400/0/1686592063966?e=1693440000&v=beta&t=ZdOtDRlAbL95RcNkweped0mh3d1dQiex41ao9n7FHnE"

  const atividades = [
    { atividade: "Curtiu a Publicação de Luiz", data: "01 de julho" },
    { atividade: "Comentou a Publicação de Regina", data: "01 de julho" },
    { atividade: "Salvou a Publicação de Julio", data: "30 de junho" },
    { atividade: "Alterou a foto de perfil", data: "30 de junho" },
    { atividade: "Alterou os dados pessoais", data: "30 de junho" },
    { atividade: "Criou a conta", data: "29 de junho" }
  ]

  const publicacoes = [
    { texto: "Sistema Operacional que estais na memória,", data: "01 de julho" },
    { texto: "Compilado seja o vosso programa", data: "01 de julho" },
    { texto: "Venha à tela os vossos comandos", data: "01 de julho" },
    { texto: "Seja executada a nossa rotina", data: "01 de julho" },
    { texto: "Assim na memória, como na impressora.", data: "01 de julho" },
    { texto: "Acerto nosso de cada dia, rodai hoje", data: "01 de julho" },
    { texto: " Informai os nossos erros", data: "01 de julho" },
    { texto: "Assim como nós informamos o que está corrigido", data: "01 de julho" },
    { texto: "Não nos deixai entrar em looping", data: "01 de julho" },
    { texto: "Mas livrai-nos do Dump", data: "01 de julho" },
    { texto: "Amém", data: "01 de julho" },
  ]

  const informacoesPessoais = [
    { title: "Data de Nascimento", description: "24 de outubro de 1997" },
    { title: "Escolaridade", description: "Ensino Médio Completo" },
    { title: "Onde Mora", description: "Cuiabá - MT" },
    { title: "E-mail", description: "lucashsamaral@gmail.com" },
    { title: "Estado Civil", description: "Casado" },
  ]



  return (
    <div className="app">
      <Header />
      {/* Area de navegação */}

      <nav>

        {/* Card do usuario */}
        <UserCard srcimg={profileImg} name={username} />

        {/* Informacoes pessoais */}
        <div className="informacoes-pessoais">

          {
            informacoesPessoais.map((info) => {
              return (<PersonalInfo title={info.title} description={info.description} />)
            }
            )
          }
        </div>
      </nav>


      {/* Historico de atividades e publicacoes*/}
      <div className="main-right">


        {/* Historico de atividades */}
        <section className="atividades">
          <h1 className="h1margin">Histórico de atividades</h1>

          {atividades.map((atividade) => {
            return (<Atividades atividade={atividade.atividade} data={atividade.data} />)
            })
          }
        </section>

        {/* Publicacoes */}
        <section className="publicacoes">
          <h1 className="h1margin">Publicações</h1>
          {publicacoes.map((publicacao) => {
            return (<Publicacao texto={publicacao.texto} img={profileImg} username={username} data={publicacao.data} />)
          }
          )}


        </section>

      </div>



      {/*  */}
    </div>

  );
}



export default App;
