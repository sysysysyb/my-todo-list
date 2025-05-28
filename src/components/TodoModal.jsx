import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";

const StyledModal = styled(Modal)`
  &.ReactModal__Overlay {
  }
  &.ReactModal__Content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16rem;
    height: 8rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0 12px 3px #00000025;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

const ModalInput = styled.input`
  width: 70%;
  padding: 0.25rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.25rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledButton = styled.button`
  padding: 0.25rem 1.2rem;
  border: 0;
  border-radius: 1rem;
  font-size: 0.75rem;
  cursor: pointer;
`;

const CancelButton = styled(StyledButton)`
  border: 1px solid #e0e0e0;
  background-color: #fff;
`;

const ConfirmButton = styled(StyledButton)`
  background-color: #af79fa;
  color: #fff;
`;

function TodoModal({
  isModalOpen,
  setModalOpen,
  onConfirm,
  todoId = null,
  text,
}) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue("");
  }, [isModalOpen]);

  return (
    <StyledModal isOpen={isModalOpen}>
      {`✨ ${text} 할 일을 입력해주세요!`}
      <ModalInput
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <ButtonsWrapper>
        <CancelButton onClick={() => setModalOpen((prev) => !prev)}>
          취소
        </CancelButton>
        <ConfirmButton
          onClick={() => {
            setModalOpen((prev) => !prev);
            onConfirm(inputValue, todoId);
          }}>
          확인
        </ConfirmButton>
      </ButtonsWrapper>
    </StyledModal>
  );
}

export default TodoModal;
