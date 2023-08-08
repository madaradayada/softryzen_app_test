import styled from "styled-components";
import { screen } from "../../items/screenType/screenType";
import { BsSliders } from "react-icons/bs";

export const SortBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px;
  margin-left: 24px;
  gap: 16px;
  border-radius: 8px;
  border: none;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.categoryTitle};
  background: ${(props) => props.theme.colors.backgroundWhite};
  box-shadow: ${(props) => props.theme.colors.button.buttonShadow};

  &:hover {
    color: ${(props) => props.theme.colors.button.default};
  }

  @media ${screen.tablet} {
    width: 158px;
  }
`;

export const SortBtnTitle = styled.span`
  display: none;

  @media ${screen.tablet} {
    display: block;
  }
`;

export const SortBtnIcon = styled(BsSliders)`
  width: 24px;
  height: 24px;
`;