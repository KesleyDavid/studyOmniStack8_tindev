import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

// match -> todos os parametros que foram passados para a rota
// Acessar -> match.params.id
export default function Main( {match} ) {

  const [users, setUsers] = useState([]);
  // Inicia o array users como vazio

  // 1 - função a ser executada
  // 2 - quando quero executar
  //      variaveis dentro de array
  //      se passar vazio [], será executado somente uma vez
  //      passar com o conteudo sempre que for alterado

  useEffect( () => { // não recomenda asyns diretamente aqui
    // async function loadUsers(){
    //   // code
    // }
    // loadUsers();

    // A função é chamada logo a por ser definida
    (async function loadUsers(){
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id
        }
      });

      console.log(response.data);
      setUsers(response.data);

    })();

  }, [match.params.id]);

  async function handleLike(id){
    console.log('like',id);

    // POST -> segundo parametro é o body e não o header como no GET do userEffect
    // 3 parametro é o header
    await api.post(`/devs/${id}/likes`, null, {
      headers: {
        user: match.params.id
      }
    });

    // Filtra todo array users, e retorna todos menos o que estamos deletando
    setUsers( (users.filter (user => user._id !== id)));
  }

  async function handleDislike(id){
    console.log('dislike',id);

    // POST -> segundo parametro é o body e não o header como no GET do userEffect
    // 3 parametro é o header
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: {
        user: match.params.id
      }
    });

    // Filtra todo array users, e retorna todos menos o que estamos deletando
    setUsers( (users.filter (user => user._id !== id)));
  }

  return (
    // <h1>{match.params.id}</h1>
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev"/>
      </Link>
        {/* map -> Percorrer um array e retornar algo */}
        
        { users.length > 0 ? (
          <ul>
            {users.map( user => (
              <li key={user._id}>
                <img src={user.devAvatar} alt={user.devName}></img>
                <footer>
                  <strong>{user.devName}</strong>
                  <p>{user.devBio}</p>
                </footer>
                <div className="buttons">
                  <button type="button" onClick={() => handleDislike(user._id)}>
                    <img src={dislike} alt="dislike" />
                  </button>
                  <button type="button" onClick={() => handleLike(user._id)}>
                    <img src={like} alt="like" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty">
            Acabou :(
          </div>
        )}
    </div>
  )
}