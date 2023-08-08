import styled from "styled-components";
import { screen } from "../../items/screenType/screenType";
import { CiFilter } from "react-icons/ci";

export const CategoryWrapper = styled.div`
  position: relative;
  @media ${screen.tablet} {
    min-width: 158px;
  }
`;

export const CategoryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  border: none;

  color: ${(props) => props.theme.colors.categoryTitle};
  background: ${(props) => props.theme.colors.backgroundWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  box-shadow: ${(props) => props.theme.colors.button.buttonShadow};

  &:hover {
    color: ${(props) => props.theme.colors.button.default};
  }

  @media ${screen.tablet} {
    width: 158px;
  }
`;

export const CategoryButtonTitle = styled.span`
  display: none;

  @media ${screen.tablet} {
    display: block;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const CategoryButtonIcon = styled(CiFilter)`
  width: 24px;
  height: 24px;
`;

export const CategoryDropdown = styled.div`
  min-width: 158px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;

  top: 0;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.colors.button.buttonShadow};
`;

export const CategoryDropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const CategoryDropdownItem = styled.li`
  cursor: pointer;
  padding: 8px 24px;
  color: ${(props) => props.theme.colors.button.disable};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.button.disable};
  }

  &:hover,
  &:active {
    color: ${(props) => props.theme.colors.button.default};
  }
`;
export const CategoryDropdownWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 21px;
  border-bottom: 1px solid ${(props) => props.theme.colors.button.disable};
  color: ${(props) => props.theme.colors.button.default};
`;