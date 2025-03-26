import styled from "@emotion/styled";
import logoWibleLg from "~/assets/logo_wible_lg.svg";
import Tabs from "./Tabs";
import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";

function Header() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container ref={containerRef} isScrolled={isScrolled}>
      <Wrapper>
        <LogoImage src={logoWibleLg} alt="위블 로고" />
        <Tabs />
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.header<{ isScrolled: boolean }>`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme: { colors } }) => colors.white};
  ${({ isScrolled }) =>
    isScrolled &&
    css`
      box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
    `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
`;

const LogoImage = styled.img``;
