import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { SERVICE_INQUIRE_CONTENTS } from "~/constants/shared/serviceInquire";
import { media } from "~/styles/mediaQuery";

function ServiceInquireSection() {
  return (
    <Container>
      <Title>서비스 문의</Title>

      <ContentsWrapper>
        <Contents>
          {SERVICE_INQUIRE_CONTENTS.map((content) => (
            <ContentWrapper key={content.id}>
              {content.download ? (
                <StyledAnchor href={content.href} download={content.download}>
                  <Icon src={content.icon} />
                  <ContentText>
                    {content.text}
                    {content.subText && <em>{content.subText}</em>}
                  </ContentText>
                </StyledAnchor>
              ) : (
                <StyledLink to={content.href} {...(content.target && { target: content.target })}>
                  <Icon src={content.icon} />
                  <ContentText>
                    {content.text}
                    {content.subText && <em>{content.subText}</em>}
                  </ContentText>
                </StyledLink>
              )}
            </ContentWrapper>
          ))}
        </Contents>
      </ContentsWrapper>
    </Container>
  );
}

export default ServiceInquireSection;

const Container = styled.section`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 64px 0 24px 0;

  ${media.mobile} {
    font-size: 20px;
  }
`;

const ContentsWrapper = styled.div``;

const Contents = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const ContentWrapper = styled.li`
  flex: 1;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.colors.midnight900};
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;

  ${media.tablet} {
    flex: 0 0 calc(50% - 8px);

    &:last-child:nth-child(odd) {
      flex: 0 0 100%;
    }
  }

  ${media.mobile} {
    flex: 0 0 100%;
  }
`;

const anchorStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding: 0 1.4em;
  box-sizing: border-box;

  ${media.mobile} {
    justify-content: flex-start;
  }
`;

const StyledLink = styled(Link)`
  ${anchorStyle};
  color: ${({ theme }) => theme.colors.midnight900};

  :hover {
    background-color: ${({ theme }) => theme.colors.gray10};
  }
`;

const StyledAnchor = styled.a`
  ${anchorStyle};
  color: ${({ theme }) => theme.colors.midnight900};

  :hover {
    background-color: ${({ theme }) => theme.colors.gray10};
  }
`;

const Icon = styled.img`
  ${media.tablet} {
    width: 32px;
    height: 32px;
  }
`;

const ContentText = styled.span`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  em {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray500};
    font-style: normal;
  }

  ${media.tablet} {
    font-size: 16px;
  }
`;
