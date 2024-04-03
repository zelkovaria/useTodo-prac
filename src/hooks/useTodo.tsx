import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
}

const useTodo = (id?: string) => {
  const [data, setData] = useState<Todo>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        setData(response.data);
      } catch (error: unknown) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);
  return { data, isLoading, error };
};

export default useTodo;
