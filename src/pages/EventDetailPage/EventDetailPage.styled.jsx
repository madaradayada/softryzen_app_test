import { screen } from "../../items/screenType/screenType";
import { MainTitle } from "../MainPage/MainPage.styled";
import styled from "styled-components";

export const EventDetailTitle = styled(MainTitle)`
  color: ${(props) => props.theme.colors.textTitle};
  margin-bottom: 24px;
  margin-top: 0px;
  display: block;

  @media ${screen.tablet} {
    display: block;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.5;
  }

  @media ${screen.desktop} {
    top: 0px;
    margin-bottom: 25px;
    margin-top: 17px;
  }
`;

export const EventDetailWrapper = styled.div`
  margin: 24px 0 auto;

  @media ${screen.desktop} {
    width: 628px;
  }
`;