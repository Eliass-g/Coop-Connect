import * as React from "react";
const appUrl = import.meta.env.VITE_APP_URL;
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import Modal from "../Profile/Partials/AddEventModal";
import EditModal from "../Profile/Partials/EditEventModal";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import {
    getInterviews,
    selectInterviews,
} from "@/Features/userJobs/userJobsSlice";
import {
    MainContainer,
    Container,
    Wrapper,
    Header,
    CalendarDiv,
    CalendarHeader,
    Month,
    NavIcons,
    Icon,
    DaysOfWeek,
    Day,
    DatesGrid,
    DateCell,
    EventsContainer,
    EventsHeader,
    Event,
    NoEventsMessage,
    DeleteButton,
    GlobalStyles,
    PurpleButton,
} from "./Styling/Interviews.styles";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const Interviews = () => {
    const dispatch = useDispatch();
    const [events, setEvents] = useState([]);
    const darkMode = false;
    const fontSize = "1em";
    const interviews = useSelector(selectInterviews);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        dispatch(getInterviews());
    }, [dispatch]);

    function transformedInterviews(interviews) {
        const result = interviews.map((interview) => ({
            ...interview,
            start: new Date(interview.timeSlots),
            end: new Date(interview.timeSlots),
        }));
        return result;
    }

    useEffect(() => {
        setEvents(transformedInterviews(interviews));
    }, [interviews]);

    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
        const day = String(today.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        let backgroundColor = "#6B538C"; // Desired color for the event markers
        let style = {
            backgroundColor: backgroundColor,
            borderRadius: "5px",
            opacity: 0.8,
            color: "white", // Text color for better contrast
            border: "0px",
            display: "block",
            fontSize: "14px",
        };
        return {
            style: style,
        };
    };

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
    };

    const formats = {
        agendaHeaderFormat: ({ start, end }, culture, localizer) =>
            `${localizer.format(
                start,
                "MMMM DD, YYYY",
                culture
            )} – ${localizer.format(end, "MMMM DD, YYYY", culture)}`,
    };

    return (
        <NavBar header={"Interviews"}>
            <GlobalStyles darkMode={darkMode} fontSize={fontSize} />
            <MainContainer darkMode={darkMode} fontSize={fontSize}>
                <Container darkMode={darkMode} fontSize={fontSize}>
                    <Wrapper darkMode={darkMode} fontSize={fontSize}>
                        <Header darkMode={darkMode} fontSize={fontSize}>
                            Interviews
                        </Header>
                        <CalendarDiv darkMode={darkMode} fontSize={fontSize}>
                            <DndProvider
                                darkMode={darkMode}
                                fontSize={fontSize}
                                backend={HTML5Backend}
                            >
                                <DnDCalendar
                                    darkMode={darkMode}
                                    fontSize={fontSize}
                                    defaultDate={new Date(getTodayDate())}
                                    defaultView="month"
                                    events={events}
                                    localizer={localizer}
                                    style={{ height: "100%" }}
                                    selectable
                                    startAccessor={"start"}
                                    endAccessor="end"
                                    eventPropGetter={eventStyleGetter}
                                    formats={formats}
                                    resizable={false}
                                    onSelectEvent={handleSelectEvent}
                                />
                            </DndProvider>
                        </CalendarDiv>
                    </Wrapper>
                    <EventsContainer darkMode={darkMode} fontSize={fontSize}>
                        <EventsHeader darkMode={darkMode} fontSize={fontSize}>
                            All Events
                        </EventsHeader>
                        {events && events.length > 0 ? (
                            events.map((event) => {
                                return (
                                    <Event
                                        darkMode={darkMode}
                                        fontSize={fontSize}
                                        key={event.id}
                                    >
                                        <div>Position: {event.title}</div>
                                        <div>Company: {event.company}</div>
                                        <div>Location: {event.location}</div>
                                        <div>
                                            Description: {event.description}
                                        </div>
                                        <div>
                                            Date:{" "}
                                            {moment(event.start).format(
                                                "MMMM D, YYYY HH:mm"
                                            )}
                                        </div>
                                    </Event>
                                );
                            })
                        ) : (
                            <NoEventsMessage
                                darkMode={darkMode}
                                fontSize={fontSize}
                            >
                                No events found
                            </NoEventsMessage>
                        )}
                    </EventsContainer>
                </Container>
            </MainContainer>
            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            )}
        </NavBar>
    );
};

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold">{event.title}</h2>
                <p>
                    <strong>Company:</strong> {event.company}
                </p>
                <p>
                    <strong>Location:</strong> {event.location}
                </p>
                <p>
                    <strong>Date:</strong>{" "}
                    {new Date(event.start).toLocaleString()}
                </p>
                <p>
                    <strong>Description:</strong>{" "}
                    {event.description || "No additional details."}
                </p>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-purple-500 text-white rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Interviews;
