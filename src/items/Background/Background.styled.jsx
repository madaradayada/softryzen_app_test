import styled from "styled-components";
import BackgroundImage from "../../images/background.png";
import { screen } from "../screenType/screenType";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;

  @media ${screen.tablet} {
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  /* 
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  min-height: calc(100vh - 168px);
  background-repeat: no-repeat;
  background-size: 100% 100%; */
`;
export default Background;
