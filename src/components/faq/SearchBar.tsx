import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, InputHTMLAttributes, MouseEvent, useRef } from "react";
import searchIcon from "~/assets/ic_search.svg";
import clearIcon from "~/assets/ic_clear.svg";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: VoidFunction;
}

function SearchBar({
  placeholder = "찾으시는 내용을 입력해 주세요",
  onSearch,
  onChange,
  value,
  ...restProps
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    onSearch?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();

      onSearch?.();
    }
  };

  const handleClear = (e: MouseEvent) => {
    e.preventDefault();
    onChange?.({ target: { value: "" } } as ChangeEvent<HTMLInputElement>);
    inputRef.current?.focus();
  };

  return (
    <Container onSubmit={handleSearch}>
      <Input
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />

      {value && (
        <ClearButton onClick={handleClear}>
          <Icon size="small" src={clearIcon} alt="clear" />
        </ClearButton>
      )}

      <SearchButton>
        <Icon size="middle" src={searchIcon} alt="search" />
      </SearchButton>
    </Container>
  );
}

export default SearchBar;

const Container = styled.form`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const searchButtonWidth = 54;
const clearButtonWidth = 25;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.midnight900};
  box-sizing: border-box;
  width: 100%;
  font-size: 1rem;
  height: 56px;
  padding: 0 ${searchButtonWidth + clearButtonWidth + 16}px 0 16px;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  border: none;
  width: ${searchButtonWidth}px;
  height: 100%;
  background-color: transparent;
`;

const Icon = styled.img<{ size: "small" | "middle" }>`
  width: ${({ size }) => (size === "small" ? 25 : 32)}px;
  height: ${({ size }) => (size === "small" ? 25 : 32)}px;
`;

const ClearButton = styled.button`
  position: absolute;
  padding: 0;
  right: ${searchButtonWidth}px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
