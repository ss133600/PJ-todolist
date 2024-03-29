import "./App.css";
import TodoTemplate from "components/TodoTemplate";
import TodoInsert from "components/TodoInsert";
import TodoList from "components/TodoList";
import { useCallback, useRef, useState } from "react";

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

  // 고유값으로 사용될 id를 useRef 사용해서 변수설정
  const nextId = useRef(4);

  // onInsert함수
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // =>concat : 배열합치기
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  //항목 지우기
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} />
      </TodoTemplate>
    </div>
  );
}

export default App;
