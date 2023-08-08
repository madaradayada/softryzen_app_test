import {
    EventBtn,
    EventIcon,
    EventTitle,
  } from "./EventButton.styled";
  
  const EventButton = () => {
    return (
      <EventBtn to="/create">
        <EventIcon />
        <EventTitle>Add new event</EventTitle>
      </EventBtn>
    );
  };
  
  export default EventButton;