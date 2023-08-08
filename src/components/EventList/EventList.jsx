import useEventStore from '../../services/eventStore';
import { EventListWrapper } from './EventList.styled';
import { EventCard } from '../EventCard/EventCard';

const EventList = ({ events }) => {
  const isLoading = useEventStore(state => state.isLoading);
  const error = useEventStore(state => state.error);

  console.log(events);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <EventListWrapper>
      {events.length === 0 ? (
        <div>No events found.</div>
      ) : (
        events.map(event => <EventCard key={event.id} event={event} />)
      )}
    </EventListWrapper>
  );
};

export default EventList;
