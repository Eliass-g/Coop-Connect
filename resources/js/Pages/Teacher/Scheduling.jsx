import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import {
    MainContainer,
    Container,
    Wrapper,
    Header,
    CalendarWrapper,
    CalendarHeader,
    Month,
    NavIcons,
    Icon,
    DaysOfWeek,
    Day,
    DatesGrid,
    DateCell,
    TodayDateCell,
    InactiveDateCell,
} from "./Styling/Scheduling.styles.jsx";

const Scheduling = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const renderCalendar = (month, year) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const prevDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
        const prevMonthDays = new Date(year, month, 0).getDate();
        const nextMonthDays = 42 - (daysInMonth + prevDays);

        const daysArray = [
            ...Array(prevDays)
                .fill(null)
                .map((_, i) => ({
                    day: prevMonthDays - prevDays + i + 1,
                    isInCurrentMonth: false,
                })),
            ...Array(daysInMonth)
                .fill(null)
                .map((_, i) => ({ day: i + 1, isInCurrentMonth: true })),
            ...Array(nextMonthDays)
                .fill(null)
                .map((_, i) => ({ day: i + 1, isInCurrentMonth: false })),
        ];

        return daysArray;
    };

    const handlePrevMonth = () => {
        const today = new Date();
        if (
            !(
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()
            )
        ) {
            if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
            } else {
                setCurrentMonth(currentMonth - 1);
            }
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const daysArray = renderCalendar(currentMonth, currentYear);

    const today = new Date();
    const isPrevDisabled =
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

    return (
        <NavBar header={"Scheduling"}>
            <MainContainer>
                <Container>
                    <Wrapper>
                        <Header>Schedule your classes</Header>
                        <CalendarWrapper>
                            <CalendarHeader>
                                <Month>
                                    {new Date(
                                        currentYear,
                                        currentMonth
                                    ).toLocaleDateString("en-us", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </Month>
                                <NavIcons>
                                    <Icon
                                        loading="lazy"
                                        src="https://img.icons8.com/ios-glyphs/30/000000/chevron-left.png"
                                        onClick={handlePrevMonth}
                                        isDisabled={isPrevDisabled}
                                    />
                                    <Icon
                                        loading="lazy"
                                        src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"
                                        onClick={handleNextMonth}
                                        isDisabled={false}
                                    />
                                </NavIcons>
                            </CalendarHeader>
                            <DaysOfWeek>
                                <Day>Mo</Day>
                                <Day>Tu</Day>
                                <Day>We</Day>
                                <Day>Th</Day>
                                <Day>Fr</Day>
                                <Day>Sa</Day>
                                <Day>Su</Day>
                            </DaysOfWeek>
                            <DatesGrid>
                                {daysArray.map((date, idx) => {
                                    const isToday =
                                        date.day === today.getDate() &&
                                        currentMonth === today.getMonth() &&
                                        currentYear === today.getFullYear();

                                    if (date.isInCurrentMonth) {
                                        return isToday ? (
                                            <TodayDateCell key={idx}>
                                                {date.day}
                                            </TodayDateCell>
                                        ) : (
                                            <DateCell key={idx}>
                                                {date.day}
                                            </DateCell>
                                        );
                                    } else {
                                        return (
                                            <InactiveDateCell key={idx}>
                                                {date.day}
                                            </InactiveDateCell>
                                        );
                                    }
                                })}
                            </DatesGrid>
                        </CalendarWrapper>
                    </Wrapper>
                </Container>
            </MainContainer>
        </NavBar>
    );
};


const CalendarDiv = styled.div`
    background-color: #ffffff;
    height: 80vh;
    margin-bottom: 3vh;
    margin-top: 3vh;

`;

const DeleteButton = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    position: absolute;
    top: 10px;
    right: 10px;
`;

const NoEventsMessage = styled.p`
  font-size: 18px;
  color: #6b538c;
  margin-top: 20px;
`;

const EventsContainer = styled.div`
  width: 100%; /* Take full width of Container */
  max-width: 400px; /* Adjust as per your design */
  overflow-y: auto; /* Make it scrollable */
height: 80vh;
`;

const EventsHeader = styled.h2`
  font-size: 24px;
  color: #6b538c;
  margin-bottom: 20px;
`;

const Event = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  position: relative; /* Ensure relative positioning for absolute children */
`;

export default Interviews;
