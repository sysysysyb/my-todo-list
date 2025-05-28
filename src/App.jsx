import { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import LifeQuotes from "./components/LifeQuotes";
import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import StopWatch from "./components/StopWatch";

const AppContainer = styled.div`
  width: 30rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

const ContentsWrapper = styled.section`
  flex: 1;
  display: flex;
  gap: 0.8rem;
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const LeftContent = styled(Content)`
  width: 70%;
`;

const RightContent = styled(Content)`
  width: 30%;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <ContentsWrapper>
        <LeftContent>
          <LifeQuotes />
          <TodoList />
        </LeftContent>
        <RightContent>
          {/* <Clock /> */}
          <Timer />
          <StopWatch />
        </RightContent>
      </ContentsWrapper>
    </AppContainer>
  );
}

export default App;
