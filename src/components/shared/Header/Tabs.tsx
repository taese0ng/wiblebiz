import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { TABS } from "~/constants/shared/header";
import { media } from "~/styles/mediaQuery";
import { useDeviceBreakpoint, useScrollLock } from "~/hooks";

interface Props {
  containerHeight: number;
}

function Tabs({ containerHeight }: Props) {
  const { isMobile, isTablet } = useDeviceBreakpoint();
  const isAnimatedNav = isMobile || isTablet;
  const location = useLocation();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useScrollLock(isSideMenuOpen);

  const handleToggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleClickTab = () => {
    handleScrollToTop();
    setIsSideMenuOpen(false);
  };

  useEffect(() => {
    handleScrollToTop();
  }, [handleScrollToTop, location.pathname]);

  return (
    <>
      <Container
        initial={isAnimatedNav ? { x: "-100%" } : { x: "0%" }}
        animate={isAnimatedNav ? { x: isSideMenuOpen ? "0%" : "-100%" } : { x: "0%" }}
        transition={{ type: "spring", damping: 20 }}
        style={{ top: containerHeight }}
      >
        <Wrapper>
          {TABS.map((tab) => (
            <Tab key={tab.path} onClick={handleClickTab}>
              <StyledLink to={tab.path}>
                <LinkText isSelected={location.pathname === tab.path}>{tab.label}</LinkText>
              </StyledLink>
            </Tab>
          ))}
        </Wrapper>
      </Container>

      <SideMenuBtn onClick={handleToggleSideMenu}>
        <HamburgerLine
          initial={{ y: -8 }}
          animate={{
            y: isSideMenuOpen ? 0 : -8,
            rotate: isSideMenuOpen ? 45 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <HamburgerLine
          initial={{ opacity: 1 }}
          animate={{
            opacity: isSideMenuOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
        <HamburgerLine
          initial={{ y: 8 }}
          animate={{
            y: isSideMenuOpen ? 0 : 8,
            rotate: isSideMenuOpen ? -45 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </SideMenuBtn>
    </>
  );
}

export default Tabs;

const Container = styled(motion.nav)`
  height: 100%;
  transform: translateX(0%);

  ${media.tablet} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme: { colors } }) => colors.white};
    z-index: 1000;
    padding-top: 80px;
  }
`;

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  height: 100%;

  ${media.tablet} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Tab = styled.li`
  position: relative;
  height: 100%;

  ${media.tablet} {
    width: 100%;
    height: 40px;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.black};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet} {
    width: 100%;
    align-items: center;
    font-size: 24px;
  }
`;

const LinkText = styled.span<{ isSelected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(-50%);
    display: block;
    width: ${({ isSelected }) => (isSelected ? "100%" : "0")};
    height: 4px;
    background-color: ${({ theme: { colors } }) => colors.mint900};
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
    transition:
      width 0.3s ease-in,
      opacity 0.3s ease-in;
  }

  &:hover::after {
    width: 100%;
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.2)};
  }
`;

const SideMenuBtn = styled(motion.button)`
  display: none;

  ${media.tablet} {
    display: block;
    height: 40px;
    width: 24px;
    cursor: pointer;
    position: relative;
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HamburgerLine = styled(motion.span)`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${({ theme: { colors } }) => colors.black};
  position: absolute;
  left: 0;
  transform-origin: center;
`;
