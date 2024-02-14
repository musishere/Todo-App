// import { useState } from "react";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

function App() {
  const [TodoItem,setTodoItem]=useState("")
  return (
    <center className="Todo-container">
      <AppName/>
      <AddTodo/>
      <br></br>
      <TodoItem1/>
      <br></br>
      <TodoItem2/>
    </center>
  );
}

export default App;