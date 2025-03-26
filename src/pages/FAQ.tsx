import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";
import { MenuFilter, CategoryTab, SearchBar, FaqList, SearchResultBar } from "~/components/faq";
import { CATEGORY_TABS } from "~/constants/faq/category";
import { useGetCategories, useGetFaqs } from "~/queries/faq";
import { CategoryTabID } from "~/types/faq/category";
import { useQueryClient } from "@tanstack/react-query";
import { faqKeys } from "~/queries/queryKeys";

function FAQ() {
  const queryClient = useQueryClient();
  const [selectedTab, setSelectedTab] = useState<CategoryTabID>(CATEGORY_TABS[0].tabID);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [clickedMore, setClickedMore] = useState(false);
  const [draftSearchQuestion, setDraftSearchQuestion] = useState("");
  const [searchQuestion, setSearchQuestion] = useState("");

  const { data: categories = [] } = useGetCategories({ tab: selectedTab });
  const {
    data: faqs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetFaqs({
    faqCategoryID: selectedCategory,
    tab: selectedTab,
    limit: 10,
    question: searchQuestion,
  });

  const handleFilterChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (clickedMore) {
      queryClient.resetQueries({
        queryKey: faqKeys.lists(),
      });
    }
    setClickedMore(false);
  };

  const handleTabChange = (tabID: CategoryTabID) => {
    setSelectedTab(tabID);
    setSelectedCategory("");
    setSearchQuestion("");
    setDraftSearchQuestion("");
    if (clickedMore) {
      queryClient.resetQueries({
        queryKey: faqKeys.lists(),
      });
    }
    setClickedMore(false);
  };

  const handleClickMore = async () => {
    if (hasNextPage && !isFetchingNextPage) {
      await fetchNextPage();
      setClickedMore(true);
    }
  };

  const handleChangeSearchQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    setDraftSearchQuestion(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuestion(draftSearchQuestion);
    setClickedMore(false);
  };

  const handleClear = () => {
    setSearchQuestion("");
    setDraftSearchQuestion("");
    queryClient.resetQueries({
      queryKey: faqKeys.lists(),
    });
    setClickedMore(false);
  };

  useEffect(() => {
    document.title = "서비스 도입 FAQ | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스";
  }, []);

  return (
    <Container>
      <Title>
        자주 묻는 질문
        <em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </Title>

      <CategoryTab selectedTab={selectedTab} onSelect={handleTabChange} />

      <SearchBarWrapper>
        <SearchBar
          value={draftSearchQuestion}
          onChange={handleChangeSearchQuestion}
          onSearch={handleSearch}
        />
      </SearchBarWrapper>

      {searchQuestion && (
        <SearchResultBar totalCount={faqs?.pageInfo.totalRecord || 0} onClear={handleClear} />
      )}

      <MenuFilterWrapper>
        <MenuFilter
          faqFilters={categories}
          isSelected={selectedCategory}
          onSelect={handleFilterChange}
        />
      </MenuFilterWrapper>

      <FaqList
        faqs={faqs?.items || []}
        onClickMore={handleClickMore}
        hasMore={hasNextPage}
        isLoading={isFetchingNextPage}
        selectedTab={selectedTab}
      />
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
`;

const Title = styled.h1`
  font-size: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;

  em {
    font-size: 16px;
    margin-top: 0.4em;
  }
`;

const SearchBarWrapper = styled.div`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.gray10};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 48px 0 24px 0;
`;

const MenuFilterWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;
