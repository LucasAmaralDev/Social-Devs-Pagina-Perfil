import { Header } from "./components/Header";
import { UserCard } from "./components/UserCard";
import { PersonalInfo } from "./components/PersonalInfo";
import { Atividades } from "./components/Atividades";
import { Publicacao } from "./components/Publicacao";


import './style.css'


function App() {
  const username = "Lucas Henrique";
  const profileImg = "https://media.licdn.com/dms/image/D4D03AQFewEXNBK_63w/profile-displayphoto-shrink_400_400/0/1686592063966?e=1693440000&v=beta&t=ZdOtDRlAbL95RcNkweped0mh3d1dQiex41ao9n7FHnE"

  return (
    <div className="app">
      <Header />
      {/* Area de navegação */}

        <nav>

          {/* Card do usuario */}
          <UserCard srcimg={profileImg} name={username} />

          {/* Informacoes pessoais */}
          <div className="informacoes-pessoais">
            <PersonalInfo title="Data de Nascimento" description="24 de outubro de 1997" />
            <PersonalInfo title="Escolaridade" description="Ensino Médio Completo" />
            <PersonalInfo title="Onde Mora" description="Cuiabá - MT" />
          </div>
        </nav>


      {/* Historico de atividades e publicacoes*/}
      <div className="main-right">
        <section className="atividades">
          <h1>Histórico de atividades</h1>
          <Atividades atividade="Curtiu a Publicação de Luiz" data="01 de julho" />
          <Atividades atividade="Comentou a Publicação de Regina" data="01 de julho" />
          <Atividades atividade="Salvou a Publicação de Julio" data="30 de junho" />
          <Atividades atividade="Alterou a foto de perfil" data="30 de junho" />
          <Atividades atividade="Alterou os dados pessoais" data="30 de junho" />
          <Atividades atividade="Criou a conta" data="29 de junho" />
        </section>

        {/* Publicacoes */}
        <section className="publicacoes">
          <h1>Publicações</h1>
          <Publicacao texto="Pai nosso, que estás nos céus!" img={profileImg} username={username} data="01 de Julho" />
          <Publicacao texto="Santificado seja o teu nome." img={profileImg} username={username} data="01 de Julho" />
          <Publicacao texto="Venha o teu Reino" img={profileImg} username={username} data="01 de Julho" />
          <Publicacao texto="Seja feita a tua vontade" img={profileImg} username={username} data="01 de Julho" />
          <Publicacao texto="Assim na terra como no céu. " img={profileImg} username={username} data="01 de Julho" />
          <Publicacao texto="Dá-nos hoje o nosso pão de cada dia." img={profileImg} username={username} data="01 de Julho" />
          <Publicacao texto="Perdoa as nossas dívidas" img={profileImg} username={username} data="01 de Julho" />
          <Publicacao texto="Assim como perdoamos aos nossos devedores." img={profileImg} username={username} data="01 de Julho" />
          <Publicacao texto="E não nos deixes cair em tentação" img={profileImg} username={username} data="01 de Julho" />
          <Publicacao texto="mas livra-nos do mal" img={profileImg} username={username} data="01 de Julho" />
          <Publicacao texto="porque teu é o Reino, o poder e a glória para sempre. Amém." img={profileImg} username={username} data="01 de Julho" />
          <Publicacao texto="Mateus 6:9-13" img={profileImg} username={username} data="01 de Julho" />

        </section>

      </div>



      {/*  */}
    </div>

  );
}



export default App;
