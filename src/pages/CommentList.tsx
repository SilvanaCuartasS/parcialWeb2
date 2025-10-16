import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { UseDispatch } from "react-redux";


const CommentList = () => {

  
  const navigate = useNavigate();

  const handleClickEditar = () => {
  navigate("/edit/:id");
  };

   const handleClickFavorito = () => {
  navigate("/favorites");
  };

   const handleClickAñadir = () => {
  navigate("/add");
  };

  return (
    <>
      <h1>Bienvenido a la lista</h1>
      <button onClick={handleClickEditar}>Editar</button>
      <button onClick={handleClickFavorito}>Favorito</button>
      <button onClick={handleClickAñadir}>Añadir comentario</button>
    </>
  );
};

export default CommentList;
