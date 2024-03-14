import React from "react";
import styled from "styled-components";

const TodoWrapper = styled.div`
  width: 512px;
  margin: 6rem auto 0;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 5px #ccc;
`;

const AppTitle = styled.h1`
  background-color: #22b8cf;
  font-size: 16px;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 400;
`;

const Content = styled.div`
  background-color: #fff;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoWrapper>
      <AppTitle>Todo List</AppTitle>
      <Content>{children}</Content>
    </TodoWrapper>
  );
};

export default TodoTemplate;
