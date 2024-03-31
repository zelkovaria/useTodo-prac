import { useEffect, useState } from "react";
import axios from "axios";

const useTodo = (id: string | undefined) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (id === undefined) {
      setIsLoading(false);
      setData(undefined);
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        setData(response.data);
      } catch (error) {
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
