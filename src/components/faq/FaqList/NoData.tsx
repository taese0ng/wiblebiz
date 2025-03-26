import styled from "@emotion/styled";
import noDataIcon from "~/assets/ic_nodata.svg";

function NoData() {
  return (
    <Container>
      <Icon src={noDataIcon} alt="no data" />
      <Text>검색결과가 없습니다.</Text>
    </Container>
  );
}

export default NoData;

const Container = styled.div`
  width: 100%;
  padding: 160px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Icon = styled.img``;

const Text = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray400};
`;
