import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const TABS = [
  {
    label: "서비스 소개",
    path: "/Quide",
  },
  {
    label: "자주 묻는 질문",
    path: "/FAQ",
  },
  {
    label: "새소식",
    path: "/News",
  },
  {
    label: "상담문의",
    path: "/Counsel",
  },
];

function Tabs() {
  const location = useLocation();

  return (
    <Container>
      {TABS.map((tab) => (
        <Tab key={tab.path}>
          <StyledLink to={tab.path} isActive={location.pathname === tab.path}>
            {tab.label}
          </StyledLink>
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

const Tab = styled.li`
  position: relative;
  height: 80px;
`;

const StyledLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.black};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: ${({ isActive }) => (isActive ? "100%" : "0")};
    height: 4px;
    background-color: ${({ theme: { colors } }) => colors.mint900};
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transition:
      width 0.3s ease-in,
      opacity 0.3s ease-in;
  }

  &:hover::after {
    width: 100%;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.2)};
  }
`;
