import styled from "@emotion/styled";
import downloadIcon from "~/assets/ic_download.svg";
import talkIcon from "~/assets/ic_talk.svg";
import writeIcon from "~/assets/ic_write.svg";

const CONTENTS = [
  {
    icon: downloadIcon,
    text: "상품제안서 다운로드",
    id: "download-inquiry",
    href: "/public/downloads/proposal.604393960f70e45463b6.pdf",
    download: "위블비즈 상품제안서",
  },
  {
    icon: talkIcon,
    text: "상담문의 등록하기",
    id: "consultation-inquiry",
    href: "/Counsel",
  },
  {
    icon: writeIcon,
    text: "카톡으로 문의하기",
    subText: "ID: Wible Biz(위블 비즈)",
    id: "kakao-inquiry",
    href: "https://pf.kakao.com/_xfLxjdb",
    target: "_blank",
  },
];

function ServiceInquireSection() {
  return (
    <Container>
      <Title>서비스 문의</Title>

      <ContentsWrapper>
        <Contents>
          {CONTENTS.map((content) => (
            <ContentWrapper key={content.id}>
              <Content
                href={content.href}
                {...(content.target && { target: content.target })}
                {...(content.download && { download: content.download })}
              >
                <Icon src={content.icon} />
                <ContentText>
                  {content.text}
                  {content.subText && <em>{content.subText}</em>}
                </ContentText>
              </Content>
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
`;

const ContentsWrapper = styled.div``;

const Contents = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const ContentWrapper = styled.li`
  flex: 1;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.colors.midnight900};
  border-radius: 5px;
  overflow: hidden;
`;

const Content = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.midnight900};

  :hover {
    background-color: ${({ theme }) => theme.colors.gray10};
  }
`;

const Icon = styled.img``;

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
`;
