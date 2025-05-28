import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 1rem 2.5rem;
  background-color: #ffffff;
  border-radius: 0.3rem;
  flex-basis: content;
  font-size: 0.75rem;
  transition: background-color 0.5s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: rgb(231, 220, 245);
  }
`;

const Quote = styled.div`
  line-height: 1.5;
`;

const Author = styled.div`
  text-align: right;
`;

const quotes = [
  {
    id: 1,
    author: "Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
  },
  {
    id: 2,
    author: "Carol Burnett",
    quote: "When you have a dream, you've got to grab it and never let go.",
  },
  {
    id: 3,
    author: "Mohatma Gandhi",
    quote: "The future depends on what we do in the present.",
  },
];

function LifeQuotes() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 3);
    setCurrentQuote(quotes[randomNum]);
    setClicked(false);
  }, [isClicked]);

  return (
    <Container onClick={() => setClicked(true)}>
      <Quote>{currentQuote.quote}</Quote>
      <Author>- {currentQuote.author}</Author>
    </Container>
  );
}

export default LifeQuotes;
