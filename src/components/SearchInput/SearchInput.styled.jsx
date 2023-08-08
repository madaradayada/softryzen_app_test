import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { screen } from "../../items/screenType/screenType";

export const StyledInput = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;

  padding: 12px 12px 12px 48px;
  width: 272px;
  height: 48px;
  margin: 0;

  border-radius: ${(props) => props.theme.radii.inputNormal};
  background: ${(props) => props.theme.colors.input.bg};
  box-shadow: ${(props) => props.theme.colors.input.inputShadow};

  color: ${(props) => props.theme.colors.input.placeholderColor};
  font-size: 14px;
  font-weight: 300;
  line-height: 1;

  border: none;
  z-index: 0;

  @media ${screen.tablet} {
    width: 368px;
    justify-content: center;
    align-items: center;
  }

  @media ${screen.desktop} {
    width: 410px;
    justify-content: center;
    align-items: center;
  }

  &:focus {
    color: ${(props) => props.theme.colors.accent};
    font-weight: 400;
  }
`;

export const ClearIcon = styled(IoClose)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${(props) => props.theme.colors.accent};

  width: 24px;
  height: 24px;
`;