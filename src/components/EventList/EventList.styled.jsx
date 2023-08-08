import styled from "styled-components";
import { screen } from "../../items/screenType/screenType";

export const EventListWrapper = styled.ul`
  display: grid;
  gap: 24px;
  margin-top: 40px;

  @media ${screen.tablet} {
    margin-top: 40px;
    grid-template-areas:
      "a a"
      "a a"
      "a a";
  }

  @media ${screen.desktop} {
    margin-top: 40px;
    grid-template-areas:
      "a a a a"
      "a a a a";
  }
`;