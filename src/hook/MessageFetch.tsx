import { useEffect, useState } from "react";
import type { Message } from "../types/MessageType";

const useMessage = () => {
  const [message, setMessage] = useState<Message[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => res.json())
      .then((datos) => setMessage(datos))
      .catch((error) => {
        console.error("Error al obtener los mensajes:", error);
        setError("Error al cargar los mensajes");
      })
      .finally(() => setLoading(false));
  }, []);

  return { message, loading, error };
};

export default useMessage;