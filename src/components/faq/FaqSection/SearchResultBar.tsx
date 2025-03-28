import styled from "@emotion/styled";
import resetIcon from "~/assets/ic_init.svg";
import { media } from "~/styles/mediaQuery";

interface Props {
  totalCount: number;
  onClear: VoidFunction;
}

function SearchResultBar({ totalCount, onClear }: Props) {
  const handleClickClear = () => {
    onClear();
  };

  return (
    <Container>
      <ResultText>
        검색결과 총 <em>{totalCount}</em>건
      </ResultText>

      <ResetButton onClick={handleClickClear}>
        <Icon src={resetIcon} alt="reset" />
        검색초기화
      </ResetButton>
    </Container>
  );
}

export default SearchResultBar;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ResultText = styled.div`
  font-size: 21px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.midnight900};

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.mint900};
  }

  ${media.tablet} {
    font-size: 18px;
  }

  ${media.mobile} {
    font-size: 14px;
  }
`;
const ResetButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 800;

  ${media.tablet} {
    font-size: 14px;
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;

  ${media.tablet} {
    width: 20px;
    height: 20px;
  }

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;
