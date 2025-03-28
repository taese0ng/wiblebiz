import styled from "@emotion/styled";
import logoWibleLg from "~/assets/logo_wible_lg.svg";
import Tabs from "./Tabs";
import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { media } from "~/styles/mediaQuery";

function Header() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
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

  useEffect(() => {
    setContainerHeight(containerRef.current?.clientHeight || 0);

    window.addEventListener("resize", () => {
      setContainerHeight(containerRef.current?.clientHeight || 0);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <Container ref={containerRef} isScrolled={isScrolled}>
      <Wrapper>
        <LogoImage src={logoWibleLg} alt="위블 로고" />
        <Tabs containerHeight={containerHeight} />
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.header<{ isScrolled: boolean }>`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme: { colors } }) => colors.white};
  ${({ isScrolled }) =>
    isScrolled &&
    css`
      box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
    `}
  z-index: ${({ theme: { zIndex } }) => zIndex.header};

  ${media.tablet} {
    height: 56px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 100%;

  ${media.tablet} {
    padding: 0 24px;
  }
`;

const LogoImage = styled.img`
  ${media.tablet} {
    height: 48px;
  }
`;
