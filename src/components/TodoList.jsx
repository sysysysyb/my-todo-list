import styled from "@emotion/styled";
import { useState, useReducer } from "react";
import trash from "../images/icon_trash.svg";
import edit from "../images/icon_edit.svg";
import TodoModal from "./TodoModal";

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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const IconButton = styled(TodoButton)`
  background-color: transparent;

  img {
    width: 1rem;
  }
`;

const AddButton = styled(TodoButton)`
  background-color: #af79fa;
  color: #fff;
  font-size: 0.875rem;
  padding: 0.25rem 1.2rem;
  border-radius: 0.8rem;
`;

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, content: "리액트 공부하기", isDone: false },
    { id: 2, content: "투두리스트 만들기", isDone: true },
    { id: 3, content: "운동하기", isDone: false },
    {
      id: 4,
      content: "잠 자기",
      isDone: false,
    },
    { id: 5, content: "저녁으로 맛있는거 먹기", isDone: false },
  ]);
  // const [isModalOpen, setModalOpen] = useState(false);

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      });
    });
  };

  const handleAddTodo = (newContent) => {
    if (!newContent) return;
    setTodos((prevTodos) => [
      { id: Date.now(), content: newContent, isDone: false },
      ...prevTodos,
    ]);
  };

  const handleEditTodo = (newContent, id) => {
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

  const {
    isModalOpen: isAddModalOpen,
    setModalOpen: setAddModalOpen,
    handleConfirm: handleAddConfirm,
  } = useModal(handleAddTodo);

  const {
    isModalOpen: isEditModalOpen,
    setModalOpen: setEditModalOpen,
    todoId,
    setTodoId,
    handleConfirm: handleEditConfirm,
  } = useModal(handleEditTodo);

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
              <IconButton
                onClick={() => {
                  setEditModalOpen((prev) => !prev);
                  setTodoId(todo.id);
                }}>
                <img src={edit} />
              </IconButton>
              <IconButton onClick={() => handleDeleteTodo(todo.id)}>
                <img src={trash} />
              </IconButton>
            </ButtonsWrapper>
          </TodoLabel>
        ))}
      </TodosWrapper>
      <AddButton onClick={() => setAddModalOpen((prev) => !prev)}>
        추가하기
      </AddButton>
      <>
        <TodoModal
          isModalOpen={isAddModalOpen}
          setModalOpen={setAddModalOpen}
          onConfirm={handleAddConfirm}
          text="새로운"
        />
        <TodoModal
          isModalOpen={isEditModalOpen}
          setModalOpen={setEditModalOpen}
          onConfirm={handleEditConfirm}
          todoId={todoId}
          text="수정된"
        />
      </>
    </Container>
  );
}

const useModal = (handleTodo) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [todoId, setTodoId] = useState(null);

  const handleConfirm = (newContent, id = null) => {
    handleTodo(newContent, id);
  };

  return { isModalOpen, setModalOpen, todoId, setTodoId, handleConfirm };
};

export default TodoList;
