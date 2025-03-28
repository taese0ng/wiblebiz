import styled from "@emotion/styled";
import { useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TABS } from "~/constants/shared/header";

function Tabs() {
  const location = useLocation();

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    handleScrollToTop();
  }, [handleScrollToTop, location.pathname]);

  return (
    <Container>
      {TABS.map((tab) => (
        <Tab key={tab.path} isSelected={location.pathname === tab.path} onClick={handleScrollToTop}>
          <StyledLink to={tab.path}>{tab.label}</StyledLink>
        </Tab>
      ))}
    </Container>
  );
}

export default Tabs;

const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const Tab = styled.li<{ isSelected: boolean }>`
  position: relative;
  height: 80px;

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

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.black};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
