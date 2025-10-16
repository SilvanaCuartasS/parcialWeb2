import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EditComments = () => {

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputBody, setInputBody] = useState("");
  
  const navigate = useNavigate();

   const handleClickEditar = () => {
  navigate("/");
  };

  return (
    <>
      <h1>Bienvenido al editar</h1>
      <button onClick={handleClickEditar}>Guardar</button>

       <h3>Nombre</h3>
       <input
        type="text"
        value={inputName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputName(e.target.value)
        }
      />
        <h3>Email</h3>
       <input
        type="text"
        value={inputEmail}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputEmail(e.target.value)
        }
      />

      <h3>Texto del comentario</h3>
      <input
        type="text"
        value={inputBody}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputBody(e.target.value)
        }
      />
    </>
  );
};

export default EditComments;
