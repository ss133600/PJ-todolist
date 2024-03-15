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

  // =>input상자에 값변화 감지위한 함수
  // =>useCallback은 리액트에서 성능 최적화를 위해 사용되는 강력한 도구.
  //  함수의 메모이제이션을 통해 함수 재생성을 방지하고, 의존성 배열을 사용하여 필요한 경우에만 함수를 업데이트할 수 있다.
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
