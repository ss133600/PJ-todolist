import React from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
  input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 17px;
    line-height: 1.5px;
    color: white;
    &::placeholder {
      color: #6dd2e6;
    }
    flex: 1;
  }

  button {
    background: #868296;
    outline: none;
    border: none;
    color: #fff;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    line-height: 20px;
    font-size: 20px;
    transition: all 0.2s;
    &:hover {
      background: #adb5bd;
    }
  }
`;
const TodoInsert = () => {
  return (
    <TodoInsertWrapper>
      <input type="text" placeholder="할 일을 입력하세요" />
      <button>
        <MdAdd />
      </button>
    </TodoInsertWrapper>
  );
};

export default TodoInsert;
