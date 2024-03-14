import React from "react";
import { Routes, Route } from "react-router-dom";
import TodosList from "./TodosList";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/todos/:id" element={<TodosList />}></Route>
    </Routes>
  );
};

export default RoutesContainer;
