import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PROCESS_INFO_CONTENTS } from "~/constants/shared/processInfo";

function ProcessInfoSection() {
  return (
    <Container>
      <Title>이용 프로세스 안내</Title>

      <ContentsWrapper>
        <Contents>
          {PROCESS_INFO_CONTENTS.map((content, index) => (
            <ContentWrapper key={content.id}>
              <Icon src={content.icon} alt={content.title} />
              <ContentTitle hasArrow={index !== 0}>
                <em>{index + 1}.</em>
                {content.title}
              </ContentTitle>
              <ContentDescription>{content.description}</ContentDescription>
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
`;

const ContentWrapper = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 12px;
  padding: 0 24px;
`;

const Icon = styled.img``;

const ContentTitle = styled.strong<{ hasArrow: boolean }>`
  position: relative;
  font-size: 18px;

  em {
    font-style: normal;
    margin-right: 3px;
  }

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
`;

const ContentDescription = styled.em`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.gray700};
`;
