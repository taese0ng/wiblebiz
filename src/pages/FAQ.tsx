import styled from "@emotion/styled";
import { useEffect } from "react";
import { FaqSection } from "~/components/faq";
import {
  AppStoreInfoSection,
  ProcessInfoSection,
  ServiceInquireSection,
} from "~/components/shared";
import { media } from "~/styles/mediaQuery";

function FAQ() {
  useEffect(() => {
    document.title = "서비스 도입 FAQ | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스";
  }, []);

  return (
    <Container>
      <Title>
        자주 묻는 질문
        <em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </Title>

      <FaqSection />

      <ServiceInquireSection />

      <ProcessInfoSection />

      <AppStoreInfoSection />
    </Container>
  );
}

export default FAQ;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${media.tablet} {
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;

  ${media.tablet} {
    font-size: 32px;
    align-items: flex-start;
    margin: 40px 0;
  }

  ${media.mobile} {
    font-size: 24px;
    margin: 32px 0;
  }

  em {
    font-size: 16px;
    margin-top: 0.4em;

    ${media.tablet} {
      font-size: 14px;
    }

    ${media.mobile} {
      font-size: 12px;
    }
  }
`;
