import { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";

const AppContainer = styled.div`
  width: 30rem;
  height: 20rem;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <div style={{ backgroundColor: "purple", flex: "1" }}>
        {/* <LifeQuotes />
        <TodoList />
        <Timer />
        <StopWatch /> */}
      </div>
    </AppContainer>
  );
}

export default App;
