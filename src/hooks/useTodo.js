import { useEffect, useState } from "react";
import axios from "axios";

const useTodo = (id) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        setData(response.data);
        setError(undefined);
      } catch (error) {
        setData(undefined);
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
