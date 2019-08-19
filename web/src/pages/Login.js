import React from 'react';
import './Login.css'; 
// Login.css -> Quando é só um arquivo, não precisa dar nome

import logo from '../assets/logo.svg';

export default function Login(){
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tindev"/>
        <input placeholder="Digite seu usuário no Github"/>
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}