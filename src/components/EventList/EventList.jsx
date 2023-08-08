/* eslint-disable react/prop-types */
import useEventStore from "../../services/eventStore";
import { EventListWrapper } from "./EventList.styled";
import { EventCard } from "../EventCard/EventCard";
import Loader from "../Loader/Loader";

const EventList = ({ events }) => {
  const isLoading = useEventStore((state) => state.isLoading);
  const error = useEventStore((state) => state.error);

  console.log(events);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <EventListWrapper>
      {events.length === 0 ? (
        <div>No events found.</div>
      ) : (
        events.map((event) => <EventCard key={event.id} event={event} />)
      )}
    </EventListWrapper>
  );
};

export default EventList;