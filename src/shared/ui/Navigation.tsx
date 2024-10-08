/* eslint-disable import/no-named-as-default */
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { commonColors } from "../styles/theme";
import { NavigationItem, NavigationPropsWithDefaults } from "./types";
import { commonTransition } from "../styles/GlobalTransitions";
import { commonFlexCenter } from "../styles/GlobalVariables";

const Navigation = ({
  $list = [],
  $color,
  $size,
}: NavigationPropsWithDefaults) => {
  const location = useLocation(); // 현재 경로 가져오기

  const defaultItems: NavigationItem[] = [
    { name: "Home", path: "/" },
    { name: "Detail", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
  ];

  const navItems = $list.length ? $list : defaultItems;

  return (
    <>
      <Lists>
        {navItems.map(({ name, path }, idx) => {
          const isActive = location.pathname === path; // 현재 경로와 일치하는지 확인
          return (
            <List
              key={idx}
              $nameLength={name.length}
              $color={$color}
              $size={$size}
              $isActive={isActive}
            >
              <StyledLink
                to={path}
                $color={isActive ? commonColors.text_in_box : $color} // 경로 일치 시 color를 commonColors.text_in_box로 설정
                $size={$size}
                $isActive={isActive}
              >
                {name}
              </StyledLink>
            </List>
          );
        })}
      </Lists>
    </>
  );
};

export default Navigation;

const Lists = styled.ul`
  display: flex;
  gap: 20px;
`;

const List = styled.li<{
  $nameLength: number;
  $color?: string;
  $size?: number;
  $isActive: boolean;
}>`
  ${commonFlexCenter}
  padding: ${({ $nameLength }) =>
    $nameLength === 1
      ? "0 15px"
      : $nameLength >= 4
        ? `0 ${($nameLength * 10) / 1.3}px`
        : `0 ${$nameLength + 25}px`};
  width: ${({ $nameLength }) => ($nameLength === 1 ? "46px" : "auto")};
  height: 36px;
  border-radius: 8px;
  position: relative;
  color: ${({ theme, $color, $isActive }) =>
    $isActive ? commonColors.text_in_box : $color || theme.colors.text};
  background-color: ${({ $isActive, $color }) =>
    $isActive
      ? $color || commonColors.primary
      : "transparent"}; // 현재 경로일 때 배경색 변경
  ${commonTransition}
  &:hover {
    color: ${commonColors.text_in_box};
    background-color: ${({ $color }) => $color || commonColors.primary};
    ${commonTransition}
  }
`;

const StyledLink = styled(Link)<{
  $color?: string;
  $size?: number;
  $isActive: boolean;
}>`
  ${commonFlexCenter}
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${({ $color, $isActive }) =>
    $isActive ? commonColors.text_in_box : $color || "inherit"};
  font-size: ${({ $size }) =>
    $size ? `${$size}px` : "14px"}; // 숫자만 받아서 px로 변환
  font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
  text-decoration: none;
`;
