import { Header } from "./components/Header";
import { UserCard } from "./components/UserCard";
import { PersonalInfo } from "./components/PersonalInfo";
import { Atividades } from "./components/Atividades";
import { Publicacao } from "./components/Publicacao";

import { useState, useEffect } from "react";

import './style.css'

function CarregarInformacoesPessoais() {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    fetch('http://35.169.253.30:8080/find-personal-info', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setInfoList(data.busca);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  return (
    <div className="informacoes-pessoais">
      {infoList.length > 0 ? (
        infoList.map(info => (
          <PersonalInfo
            title={info.title}
            description={info.description}
          />
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

function CarregarInformacoesPosts() {
  const [stateLoadPost, setStateLoadPost] = useState([]);
  const profileImg = localStorage.getItem('profileImg');
  const username = localStorage.getItem('username');

  useEffect(() => {
    fetch('http://35.169.253.30:8080/load-posts', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setStateLoadPost(data);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  return (
    <div className="cardpublicacao">
      {stateLoadPost.length > 0 ? (
        stateLoadPost.map(info => (
          <Publicacao texto={info.description} img={profileImg} username={username} data={info.date} />
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}



function App() {
  const username = "Lucas Henrique";
  const profileImg = "https://media.licdn.com/dms/image/D4D03AQFyy-sWNkV0bQ/profile-displayphoto-shrink_800_800/0/1689304541000?e=1695254400&v=beta&t=2kOgjlCypKSDKjLSe3Bq8H10RkleY_eQ0ibI-wLPaEI"

  localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikx1Y2FzIEhlbnJpcXVlIiwiaWQiOjEsImlhdCI6MTY4ODM0MDAzMywiZXhwIjo0ODQ0MTAwMDMzfQ.Ca7seiXMt8KeK2kEwaiWxH_WrKMdUhcQi8k4ShcTTms");
  localStorage.setItem('username', username);
  localStorage.setItem('profileImg', profileImg);


  const atividades = [
    { atividade: "Curtiu a Publicação de Luiz", data: "01 de julho" },
    { atividade: "Comentou a Publicação de Regina", data: "01 de julho" },
    { atividade: "Salvou a Publicação de Julio", data: "30 de junho" },
    { atividade: "Alterou a foto de perfil", data: "30 de junho" },
    { atividade: "Alterou os dados pessoais", data: "30 de junho" },
    { atividade: "Criou a conta", data: "29 de junho" }
  ]






  return (
    <div className="app">
      <Header />
      {/* Area de navegação */}

      <nav>

        {/* Card do usuario */}
        <UserCard srcimg={profileImg} name={username} />



        <CarregarInformacoesPessoais loadimg={profileImg} loaduser={username} />

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
          <CarregarInformacoesPosts />




        </section>

      </div>



      {/*  */}
    </div>

  );
}



export default App;
