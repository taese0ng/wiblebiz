import styled from "@emotion/styled";
import logoWibleLg from "~/assets/logo_wible_lg.svg";
import Tabs from "./Tabs";

function Header() {
  return (
    <Container>
      <Wrapper>
        <LogoImage src={logoWibleLg} alt="위블 로고" />
        <Tabs />
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
`;

const LogoImage = styled.img``;
