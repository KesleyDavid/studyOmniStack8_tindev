import React, { useState } from 'react';
import './Login.css'; 
// Login.css -> Quando é só um arquivo, não precisa dar nome

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login( { history }){
  // export default function Login(){
  // export default function Login(props){
  // export default function Login( {x} ){
  // Ao chamar componente envia propriedade -> <Login x="5" />
  // Propriedade Acessivel -> props.x ou x (desestruturado)

  // Acessar o state
  // username -> Consultar valor
  // setUsername -> Alterar valor
  // useState('') -> valor default
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    // Evento padrão form é redirecionar para outra pagina
    // e.preventDefault -> Fala para o navegador cancelar o evento padrão
    e.preventDefault();

    //console.log(username);
    const response = await api.post('/devs', {
      // username: username -> como são os mesmos nomes
      username
    });

    const { _id:id } = response.data;

    // Redireciona para rota Main
    history.push(`/dev/${id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev"/>
        <input 
          placeholder="Digite seu usuário no Github"
          value={username}
          onChange={ event => setUsername(event.target.value)}
        />
        {/* onChange -> Recebe um evento, chama a função SET para alterar o state */}
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}