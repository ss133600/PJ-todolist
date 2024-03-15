import "./App.css";
import TodoTemplate from "components/TodoTemplate";
import TodoInsert from "components/TodoInsert";
import TodoList from "components/TodoList";
import { useState } from "react";

function App() {
  // => useState 사용하여 가짜데이터 => 목(Mock)데이터 만들기
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일1",
      checked: true,
    },
    {
      id: 2,
      text: "할일2",
      checked: true,
    },
    {
      id: 3,
      text: "할일3",
      checked: false,
    },
  ]);

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
}

export default App;
