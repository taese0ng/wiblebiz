import styled from "@emotion/styled";
import logoKia from "~/assets/logo_kia.svg";
import TermsModal from "./TermsModal";
import { useState } from "react";

const COPYRIGHT = "© 2023 KIA CORP. All Rights Reserved.";

function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleCloseTermsModal = () => {
    setIsTermsModalOpen(false);
  };

  const handleClickPersonalInfo = () => {
    window.open("https://privacy.kia.com/overview/full-policy", "_blank");
  };

  const handleClickTerms = () => {
    setIsTermsModalOpen(true);
  };

  return (
    <Container>
      <div>
        <LogoImage src={logoKia} alt="기아 로고" />
        <Copyright>{COPYRIGHT}</Copyright>
      </div>

      <div>
        <Information>
          <Util>
            <Button onClick={handleClickPersonalInfo}>개인정보 처리방침</Button>
            <Button onClick={handleClickTerms}>이용약관</Button>
            <TermsModal isOpen={isTermsModalOpen} onClose={handleCloseTermsModal} />
          </Util>

          <Address>
            <Span>
              서울특별시 서초구 헌릉로 12 <Em>기아㈜</Em>
            </Span>
            <Span>
              대표: <I>송호성, 최준영</I>
            </Span>
            <Span>
              사업자등록번호: <I>119-81-02316</I>
            </Span>
            <Span>
              통신판매번호: <I>2006-07935</I>
            </Span>
            <Span>
              고객센터: <I>1833-4964</I>
            </Span>
            <Span>
              제휴문의: <a href="mailto:wible.biz@kia.com">wible.biz@kia.com</a>
            </Span>
          </Address>
        </Information>
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  padding: 0 48px;
  background-color: ${({ theme }) => theme.colors.midnight900};
  height: 176px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  height: 56px;
  margin-bottom: 2px;
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  font-size: 14px;
  margin: 0;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

const Util = styled.span`
  font-size: 14px;
  display: flex;
  gap: 24px;
`;

const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;

  &:hover {
    text-decoration: underline;
  }
`;

const Address = styled.span`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const Span = styled.span`
  margin-right: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray400};

  a {
    color: ${({ theme }) => theme.colors.gray400};
    text-decoration: underline;
  }
`;

const Em = styled.em`
  margin-right: 8px;
`;

const I = styled.i`
  margin-left: 4px;
  font-style: normal;
`;
