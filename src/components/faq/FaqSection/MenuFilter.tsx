import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ChangeEvent, Fragment } from "react";
import { media } from "~/styles/mediaQuery";
import { Category } from "~/types/faq/category";

interface Props {
  faqFilters: Category[];
  isSelected: string;
  onSelect?: (categoryId: string) => void;
}

function MenuFilter({ faqFilters, isSelected, onSelect }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSelect?.(e.target.value);
  };

  return (
    <Container>
      <CategoryItem type="radio" id="all" name="menu" value="" onChange={handleChange} />
      <Label htmlFor="all" isSelected={!isSelected}>
        전체
      </Label>

      {faqFilters.map((filter) => (
        <Fragment key={filter.categoryID}>
          <CategoryItem
            type="radio"
            id={filter.categoryID}
            name="menu"
            value={filter.categoryID}
            onChange={handleChange}
          />
          <Label htmlFor={filter.categoryID} isSelected={isSelected === filter.categoryID}>
            {filter.name}
          </Label>
        </Fragment>
      ))}
    </Container>
  );
}

export default MenuFilter;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const CategoryItem = styled.input`
  display: none;
`;

const Label = styled.label<{ isSelected: boolean }>`
  cursor: pointer;
  padding: 0 20px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;

  ${({ isSelected, theme }) => css`
    background-color: ${isSelected ? theme.colors.mint900 : "transparent"};
    color: ${isSelected ? theme.colors.white : theme.colors.midnight900};
    border-radius: 24px;
  `}

  ${media.tablet} {
    font-size: 16px;
    height: 40px;
    padding: 0 16px;
  }

  ${media.mobile} {
    font-size: 14px;
    height: 32px;
    padding: 0 12px;
  }
`;
