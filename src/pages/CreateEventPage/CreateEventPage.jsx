import { MainSection } from "../MainPage/MainPage.styled";
import { CreateEventTitle } from "./CreateEventPage.styled";
import EventForm from "../../components/EventForm/EventFrom";
import { BackButton } from "../../components/BackButton/BackButton";

const CreateEventPage = () => {
  return (
    <MainSection>
      <BackButton />
      <CreateEventTitle>Create new event</CreateEventTitle>
      <EventForm />
    </MainSection>
  );
};

export default CreateEventPage;