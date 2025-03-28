import styled from "@emotion/styled";
import { APP_STORE_CONTENTS } from "~/constants/shared/appStore";
import { media } from "~/styles/mediaQuery";

function AppStoreInfoSection() {
  return (
    <Container>
      <Title>
        <em>위블 위즈 App</em> 지금 만나보세요!
      </Title>

      <ContentsWrapper>
        <Contents>
          {APP_STORE_CONTENTS.map((content) => (
            <ContentWrapper key={content.id}>
              <Content href={content.href} target="_blank" rel="noreferrer">
                <Icon src={content.logo} alt={content.title} />
                <ContentTitle>{content.title}</ContentTitle>
              </Content>
            </ContentWrapper>
          ))}
        </Contents>
      </ContentsWrapper>
    </Container>
  );
}

export default AppStoreInfoSection;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 12px;
  gap: 24px;
  padding: 32px;
  margin-top: 48px;
  box-sizing: border-box;

  ${media.tablet} {
    gap: 20px;
  }

  ${media.mobile} {
    gap: 16px;
    padding: 24px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.mint900};
  }

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.mobile} {
    font-size: 16px;
  }
`;

const ContentsWrapper = styled.div``;

const Contents = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  ${media.mobile} {
    flex-direction: column;
    gap: 12px;
  }
`;

const ContentWrapper = styled.li``;

const Content = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 296px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  text-decoration: none;

  ${media.tablet} {
    width: 264px;
    height: 56px;
  }

  ${media.mobile} {
    height: 48px;
  }
`;

const Icon = styled.img`
  ${media.tablet} {
    width: 24px;
    height: 24px;
  }
`;

const ContentTitle = styled.strong`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.midnight900};

  ${media.tablet} {
    font-size: 14px;
  }
`;
