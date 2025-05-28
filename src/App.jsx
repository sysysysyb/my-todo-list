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
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ContentsWrapper = styled.section`
  background-color: purple;
  flex: 1;
  display: flex;
  gap: 0.8rem;
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <ContentsWrapper>
        <Content>
          <LifeQuotes />
          <TodoList />
        </Content>
        <Content>
          {/* <Clock /> */}
          <Timer />
          <StopWatch />
        </Content>
      </ContentsWrapper>
    </AppContainer>
  );
}

export default App;
