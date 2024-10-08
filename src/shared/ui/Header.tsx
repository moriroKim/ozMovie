/* eslint-disable import/no-named-as-default */
import styled, { useTheme } from "styled-components";
import Navigation from "./Navigation";
import { Icon } from "@iconify/react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { darkModeAtom, modalAtom } from "../../app/store/atoms";
import { commonTransition } from "../styles/GlobalTransitions";
import { commonColors } from "../styles/theme";
import { commonFlexCenter } from "../styles/GlobalVariables";

const Header = () => {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeAtom);
  const setIsModalOpen = useSetRecoilState(modalAtom);
  const navItems = [
    { name: "홈", path: "/" },
    { name: "영화", path: "/movie" },
    { name: "검색", path: "/search" },
  ];
  return (
    <HeaderWrapper>
      <Nav>
        <SubWrapper>
          <Title>오즈무비</Title>
          <Navigation $list={navItems} $size={16} />
          <ToggleButton onClick={() => setIsDarkMode((prev) => !prev)}>
            {isDarkMode && (
              <Icon
                icon='line-md:moon-filled-alt-to-sunny-filled-loop-transition'
                width='26'
                height='26'
                style={{ color: `${theme.colors.text}` }}
              />
            )}

            {!isDarkMode && (
              <Icon
                icon='line-md:sunny-filled-loop-to-moon-filled-alt-loop-transition'
                width='26'
                height='26'
                style={{ color: `${theme.colors.text}` }}
              />
            )}
          </ToggleButton>
        </SubWrapper>
        <LoginButton onClick={() => setIsModalOpen((prev) => !prev)}>
          로그인
        </LoginButton>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 86px;
  padding: 24px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 0 2rem 0 #00000021;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.modal_bg};
  ${commonTransition};
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.lang.korean};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`;

const ToggleButton = styled.button`
  display: block;
`;

const LoginButton = styled.button`
  ${commonFlexCenter}
  ${commonTransition}
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
  text-align: center;
  width: 74px;
  height: 36px;
  border-radius: 6px;
  color: ${commonColors.text_in_box};
  background-color: ${commonColors.primary};

  &:hover {
    ${commonTransition}
  }
`;
