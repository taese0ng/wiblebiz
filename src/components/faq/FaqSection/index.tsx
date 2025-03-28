import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { CATEGORY_TABS } from "~/constants/faq/category";
import { useGetCategories, useGetFaqs } from "~/queries/faq";
import { CategoryTabID } from "~/types/faq/category";
import { useQueryClient } from "@tanstack/react-query";
import { faqKeys } from "~/queries/queryKeys";
import CategoryTab from "./CategoryTab";
import SearchBar from "./SearchBar";
import SearchResultBar from "./SearchResultBar";
import MenuFilter from "./MenuFilter";
import FaqList from "./FaqList";
import { media } from "~/styles/mediaQuery";

function FaqSection() {
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

  return (
    <Container>
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

export default FaqSection;

const Container = styled.section`
  width: 100%;
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

  ${media.tablet} {
    padding: 12px;
    margin: 32px 0 16px 0;
  }

  ${media.mobile} {
    padding: 0;
    background-color: transparent;
    margin: 24px 0 16px 0;
  }
`;

const MenuFilterWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;

  ${media.tablet} {
    margin-bottom: 16px;
  }

  ${media.mobile} {
    margin-bottom: 12px;
  }
`;
