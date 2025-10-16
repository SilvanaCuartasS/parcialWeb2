import { useNavigate } from "react-router-dom";

const EditComments = () => {
  
  const navigate = useNavigate();

   const handleClickEditar = () => {
  navigate("/");
  };

  return (
    <>
      <h1>Bienvenido al editar</h1>
      <button onClick={handleClickEditar}>Guardar</button>
    </>
  );
};

export default EditComments;
