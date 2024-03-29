import React from "react";
import { useParams } from "react-router-dom";
import useTodo from "./hooks/useTodo";

const TodosList = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useTodo(id);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>에러 발생</div>;
  }

  return <div>{data.title}</div>;
};

export default TodosList;
