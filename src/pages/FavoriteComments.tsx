import { useNavigate } from "react-router-dom";

const FavoriteCommnets = () => {

  const navigate = useNavigate();
  
   const handleClickEditar = () => {
  navigate("/");
  };


  return (
    <>
      <h1>Bienvenido a favoritos</h1>
      <button onClick={handleClickEditar}>Guardar</button>
    </>
  );
};

export default FavoriteCommnets;
