import React from "react";
import { useParams } from "react-router-dom";
import useTodo from "./hooks/useTodo";

const TodosList = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useTodo(id);

  return (
    <>
      {isLoading && <div>로딩중</div>}
      {!isLoading && !error && data && <div>{data.title}</div>}
      {!isLoading && error && <div> error </div>}
    </>
  );
};

export default TodosList;
