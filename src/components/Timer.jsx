import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { addMinutes, format, subSeconds } from "date-fns";

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const Title = styled.div`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
`;

const TimerTime = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const TimerButton = styled.button`
  border: 0;
  background-color: #af79fa;
  color: #fff;
  padding: 0.25rem 1.2rem;
  border-radius: 0.8rem;
  font-size: 0.75rem;
  cursor: pointer;
`;

function Timer() {
  const [isClicked, setClicked] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60 * 10);

  const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
  const seconds = String(remainingTime % 60).padStart(2, "0");

  useEffect(() => {
    if (isClicked) {
      const relaxTimer = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(relaxTimer);
            return;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(relaxTimer);
    } else {
      setRemainingTime(60 * 10);
    }
  }, [isClicked]);

  return (
    <Container>
      <Title>쉬는 시간 Timer</Title>
      <TimerTime>
        {minutes} : {seconds}
      </TimerTime>
      <TimerButton onClick={() => setClicked((prev) => !prev)}>
        {isClicked ? "종료" : "시작"}
      </TimerButton>
    </Container>
  );
}

export default Timer;
