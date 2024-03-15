import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 510px;
  overflow: auto;
`;

const TodoList = ({ todos }) => {
  return (
    <TodoListWrapper>
      {/* =>map을 사용하여 key props 전달해야 함 */}
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
