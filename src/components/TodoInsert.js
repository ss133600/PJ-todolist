import React, { useCallback, useState } from "react";
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
const TodoInsert = ({ onInsert }) => {
  // =>상태관리
  const [value, setValue] = useState("");

  // =>input상자에 값변화 감지 함수
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // =>버튼을 클릭하면 발생할 이벤트 만들기
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <TodoInsertWrapper onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button>
        <MdAdd />
      </button>
    </TodoInsertWrapper>
  );
};

export default TodoInsert;
