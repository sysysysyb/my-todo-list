import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  box-shadow: 0 0 8px 2px #00000025;
`;

const Title = styled.div`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
`;

const StopWatchTime = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StopWatchButton = styled.button`
  border: 0;
  background-color: #af79fa;
  color: #fff;
  padding: 0.25rem 1.2rem;
  border-radius: 0.8rem;
  font-size: 0.75rem;
  cursor: pointer;
`;

function StopWatch() {
  const [isPaused, setPaused] = useState(false);
  const [isRunning, setRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
  const seconds = String(remainingTime % 60).padStart(2, "0");

  useEffect(() => {
    if (isRunning && !isPaused) {
      const relaxTimer = setInterval(() => {
        setRemainingTime((prev) => {
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(relaxTimer);
    }
    if (!isRunning) {
      setPaused(false);
      setRemainingTime(0);
    }
  }, [isRunning, isPaused]);

  return (
    <Container>
      <Title>StopWatch</Title>
      <StopWatchTime>
        {minutes} : {seconds}
      </StopWatchTime>

      {!isRunning && (
        <StopWatchButton onClick={() => setRunning((prev) => !prev)}>
          {/* {isClicked ? "일시 정지" : "시작"} */}
          시작
        </StopWatchButton>
      )}
      {isRunning && (
        <ButtonsWrapper>
          <StopWatchButton onClick={() => setPaused((prev) => !prev)}>
            {isPaused ? "이어서" : "일시 정지"}
          </StopWatchButton>
          <StopWatchButton onClick={() => setRunning((prev) => !prev)}>
            종료
          </StopWatchButton>
        </ButtonsWrapper>
      )}
    </Container>
  );
}

export default StopWatch;
