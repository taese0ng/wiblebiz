import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CATEGORY_TABS } from "~/constants/faq/category";
import { media } from "~/styles/mediaQuery";
import { CategoryTabID } from "~/types/faq/category";

interface Props {
  selectedTab: CategoryTabID;
  onSelect?: (tabID: CategoryTabID) => void;
}

function CategoryTab({ selectedTab, onSelect }: Props) {
  const handleClick = (tabID: CategoryTabID) => {
    onSelect?.(tabID);
  };

  return (
    <Container>
      {CATEGORY_TABS.map((category) => (
        <CategoryTabItem
          key={category.tabID}
          isActive={selectedTab === category.tabID}
          onClick={() => handleClick(category.tabID)}
        >
          <span>{category.tabName}</span>
        </CategoryTabItem>
      ))}
    </Container>
  );
}

export default CategoryTab;

const Container = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryTabItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  font-size: 20px;
  box-sizing: border-box;
  font-weight: bold;

  ${({ isActive, theme }) => css`
    background-color: ${isActive ? theme.colors.midnight900 : theme.colors.white};
    color: ${isActive ? theme.colors.white : theme.colors.midnight900};
    border: ${isActive ? "none" : `1px solid ${theme.colors.midnight100}`};
    font-weight: ${isActive ? "700" : "600"};
  `};

  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }

  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }

  ${media.tablet} {
    height: 48px;
    font-size: 16px;
  }

  ${media.mobile} {
    height: 40px;
    font-size: 14px;
  }
`;
