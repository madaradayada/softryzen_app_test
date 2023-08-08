import styled from "styled-components";
import { screen } from "../../items/screenType/screenType";

export const MainSection = styled.section`
  width: 320px;
  margin: 0 auto;
  padding: 41px 24px;

  @media ${screen.tablet} {
    width: 768px;
    padding: 40px;
  }
  @media ${screen.desktop} {
    width: 1280px;
    padding: 80px 0;
  }
`;

export const MainFilterWrapper = styled.div`
  margin-left: auto;
  display: grid;
  justify-content: end;
  justify-items: end;
  grid-template-areas: "a b c";
`;

export const MainTitle = styled.h2`
  display: none;
  color: ${(props) => props.theme.colors.textTitle};

  @media ${screen.tablet} {
    display: block;
    margin-top: 24px;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.5;
  }

  @media ${screen.desktop} {
    top: -92px;
  }
`;