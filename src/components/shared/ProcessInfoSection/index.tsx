import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PROCESS_INFO_CONTENTS } from "~/constants/shared/processInfo";
import { media } from "~/styles/mediaQuery";

function ProcessInfoSection() {
  return (
    <Container>
      <Title>이용 프로세스 안내</Title>

      <ContentsWrapper>
        <Contents>
          {PROCESS_INFO_CONTENTS.map((content, index) => (
            <ContentWrapper key={content.id}>
              <Icon src={content.icon} alt={content.title} />

              <ContentTextWrapper>
                <ContentTitle hasArrow={index !== 0}>
                  <em>{index + 1}.</em>
                  {content.title}
                </ContentTitle>
                <ContentDescription>{content.description}</ContentDescription>
              </ContentTextWrapper>
            </ContentWrapper>
          ))}
        </Contents>
      </ContentsWrapper>
    </Container>
  );
}

export default ProcessInfoSection;

const Container = styled.section`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 64px 0 24px 0;
`;

const ContentsWrapper = styled.div``;

const Contents = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  ${media.tablet} {
    flex-direction: column;
    gap: 24px;
  }
`;

const ContentWrapper = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 12px;
  padding: 0 24px;

  ${media.tablet} {
    flex-direction: row;
    gap: 16px;
    padding: 0;
  }
`;

const Icon = styled.img`
  ${media.tablet} {
    width: 48px;
    height: 48px;
  }

  ${media.mobile} {
    width: 40px;
    height: 40px;
  }
`;

const ContentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.strong<{ hasArrow: boolean }>`
  position: relative;
  font-size: 18px;

  em {
    font-style: normal;
    margin-right: 3px;
  }

  ${media.desktop} {
    ${({ hasArrow }) =>
      hasArrow &&
      css`
        ::before {
          content: "";
          position: absolute;
          left: -36px;
          top: 0;
          background-size: auto 100%;
          width: 24px;
          height: 24px;
          background-image: url("/src/assets/ic_step_arrow.svg");
        }
      `}
  }

  ${media.mobile} {
    font-size: 16px;
  }
`;

const ContentDescription = styled.em`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.gray700};

  ${media.mobile} {
    font-size: 14px;
    margin-top: 4px;
  }
`;
