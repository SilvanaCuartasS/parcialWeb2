import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { UseDispatch } from "react-redux";
import { setComments } from "../redux/slices/MessageSlice" 


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

      <div>
        <h2>{}</h2>
        <p>{}</p>
        <p>{}</p>
      </div>

      <button onClick={handleClickEditar}>Editar</button>
      <button onClick={handleClickFavorito}>Favorito</button>
      <button onClick={handleClickAñadir}>Añadir comentario</button>
    </>
  );
};

export default CommentList;

//Sé que debo traer el slice que tiene la "copia" del fetch, declarar un estado para los cambios de los datos, del slice el valor para los elementos HTML, llamar al tipado para que se sepa que valor tiene cada elemento y llamar al dispatch para que dispare la acción.