import styled from "styled-components";
import { screen, size } from "../screenType/screenType";

const Container = styled.div`
  margin: 0 auto;
  @media ${screen.mobile} {
    width: ${size.mobile};
    padding: 0 24px;
  }
  @media ${screen.tablet} {
    width: ${size.tablet};
    padding: 0 40px;
  }
  @media ${screen.desktop} {
    width: ${size.desktop};
    padding: 0 100px;
  }
`;

export default Container;
