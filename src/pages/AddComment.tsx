import { useNavigate } from "react-router-dom";
import { useState } from "react";


const AddComment = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputBody, setInputBody] = useState("");



  const navigate = useNavigate();

  const handleClick = () => {
  navigate("/");
  };
  
  //Debe tener un form
  return (
    <>
      <h1>Bienvenido al añadir comentario</h1>
      <button onClick={handleClick}>Agregar comentario</button>

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

export default AddComment;

//Sé que debo tener un estado para cada dato que voy a reemplazar, debo crear un elemento nuevo basado en el tipado y luego vaciar cada elemento para que se reemplace por el nuevo ingresado y usar el dispatch para mandar la acción por parte del slice. 