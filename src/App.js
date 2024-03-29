import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import TodosList from "./TodosList";

function App() {
  return (
    <Routes>
      <Route path="/todos/:id" element={<TodosList />}></Route>
    </Routes>
  );
}

export default App;
