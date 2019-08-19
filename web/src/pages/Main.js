import React from 'react';

// match -> todos os parametros que foram passados para a rota
// Acessar -> match.params.id
export default function Main( {match} ) {
  return (
    <h1>{match.params.id}</h1>
  )
}