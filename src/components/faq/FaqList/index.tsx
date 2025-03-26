import styled from "@emotion/styled";
import { Item } from "~/types/faq/faq";
import FaqItem from "./FaqItem";
import { useEffect, useState } from "react";
import NoData from "./NoData";
import { CATEGORY_TAB_ID, CategoryTabID } from "~/types/faq/category";

interface Props {
  faqs: Item[];
  onClickMore: VoidFunction;
  hasMore: boolean;
  isLoading: boolean;
  selectedTab: CategoryTabID;
}

function FaqList({ faqs, onClickMore, hasMore, isLoading, selectedTab }: Props) {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [skipAnimation, setSkipAnimation] = useState(false);

  const handleClickRow = (faqId: number) => {
    setOpenFaqId(openFaqId === faqId ? null : faqId);
  };

  const handleMoreClick = () => {
    if (hasMore && !isLoading) {
      onClickMore();
    }
  };

  useEffect(() => {
    setSkipAnimation(true);
    setOpenFaqId(null);
    // 다음 렌더링에서는 다시 애니메이션을 활성화
    setTimeout(() => setSkipAnimation(false), 0);
  }, [faqs]);

  return (
    <Container>
      {faqs.length > 0 ? (
        <>
          {faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isOpen={openFaqId === faq.id}
              onClick={handleClickRow}
              skipAnimation={skipAnimation}
              showCategoryName={selectedTab === CATEGORY_TAB_ID.USAGE}
            />
          ))}

          {hasMore && (
            <MoreButton onClick={handleMoreClick} disabled={isLoading}>
              {isLoading ? "로딩 중..." : "+ 더보기"}
            </MoreButton>
          )}
        </>
      ) : (
        <NoData />
      )}
    </Container>
  );
}

export default FaqList;

const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 2px solid ${({ theme: { colors } }) => colors.midnight900};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray400};
`;

const MoreButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: auto;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.midnight900};
  margin-top: 40px;
  padding: 20px 0;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
