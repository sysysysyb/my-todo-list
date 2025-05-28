import styled from "@emotion/styled";
import { useState } from "react";
import trash from "../images/icon_trash.svg";
import edit from "../images/icon_edit.svg";

const Container = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 0 8px 2px #00000025;
`;

const TodosWrapper = styled.div`
  width: 75%;
  height: 12.5rem;
  border: 1px solid #af79fa;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TodoLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem 0;
  border-radius: 0.5rem;
  user-select: none;

  &:hover {
    background-color: #d0d0d0;
  }
`;

const TodoInput = styled.input`
  accent-color: #af79fa;
`;

const TodoContent = styled.div`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
`;

const ButtonsWrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 0.75rem;
`;

const TodoButton = styled.button`
  flex-shrink: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 1rem;
  }
`;

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, content: "리액트 공부하기", isDone: false },
    { id: 2, content: "투두리스트 만들기", isDone: true },
    { id: 3, content: "저녁 먹기", isDone: false },
    {
      id: 4,
      content: "일찍 자고 일찍 일어나기 투두투두투두투두",
      isDone: false,
    },
    { id: 5, content: "맛있는거 먹기", isDone: false },
  ]);

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      });
    });
  };

  const handleAddTodo = () => {
    const newTodo = window.prompt("✨ 새로운 할 일을 입력해주세요!");
    if (!newTodo) return;
    setTodos((prevTodos) => [
      { id: Date.now(), content: newTodo, isDone: false },
      ...prevTodos,
    ]);
  };

  const handleEditTodo = (id) => {
    const newContent = window.prompt("✏️ 수정된 할 일을 입력해주세요!");
    if (!newContent) return;
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, content: newContent } : todo;
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  return (
    <Container>
      <TodosWrapper>
        {todos.map((todo) => (
          <TodoLabel key={todo.id}>
            <TodoInput
              type="checkbox"
              checked={todo.isDone}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <TodoContent isDone={todo.isDone}>{todo.content}</TodoContent>
            <ButtonsWrapper>
              <TodoButton onClick={() => handleEditTodo(todo.id)}>
                <img src={edit} />
              </TodoButton>
              <TodoButton onClick={() => handleDeleteTodo(todo.id)}>
                <img src={trash} />
              </TodoButton>
            </ButtonsWrapper>
          </TodoLabel>
        ))}
      </TodosWrapper>
      <button onClick={handleAddTodo}>추가하기</button>
    </Container>
  );
}

export default TodoList;
