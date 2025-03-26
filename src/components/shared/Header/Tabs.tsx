import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const TABS = [
  {
    label: "서비스 소개",
    path: "/Guide",
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
        <Tab key={tab.path} isSelected={location.pathname === tab.path}>
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
