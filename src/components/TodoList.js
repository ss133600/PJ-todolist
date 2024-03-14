import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 510px;
  overflow: auto;
`;

const TodoList = () => {
  return (
    <TodoListWrapper>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </TodoListWrapper>
  );
};

export default TodoList;
