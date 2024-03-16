import React from "react";
import { useParams } from "react-router-dom";
import useTodo from "./hooks/useTodo";

const TodosList = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useTodo(id);

  return (
    <>
      <div>{data.title}</div>
    </>
  );
};

export default TodosList;
