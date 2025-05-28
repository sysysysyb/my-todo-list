import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const Container = styled.div`
  width: 100%;
  height: 2.7rem;
  background-color: #af79fa;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-shadow: 0 0 8px 2px #00000025;
`;

const Title = styled.div`
  // background-color: red;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Weekday = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

const MonthAndDay = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
`;

function Header() {
  const [weekDay, setWeekDay] = useState("");
  const [monthAndDay, setMonthAndDay] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    setWeekDay(format(currentDate, "EEEE"));
    setMonthAndDay(format(currentDate, "MMMM do"));
  }, []);

  return (
    <Container>
      <Title>
        <Weekday>{weekDay}</Weekday>
        <MonthAndDay>{monthAndDay}</MonthAndDay>
      </Title>
    </Container>
  );
}

export default Header;
