import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styled from "styled-components";
import cn from "classnames";

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  &:nth-child(even) {
    background-color: #f8f6fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1;
  svg {
    font-size: 1.3rem;
    color: #333;
  }

  .text {
    margin-left: 10px;
    color: #333;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #ff6b99;
  cursor: pointer;
  &:hover {
    color: #adb5bd;
  }
`;

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;
  return (
    <TodoItemWrapper>
      <CheckBox className={cn("checkbox", { checked })}>
        {/* => 조건문 삼항연산자 이용 */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoItemWrapper>
  );
};
export default TodoListItem;
