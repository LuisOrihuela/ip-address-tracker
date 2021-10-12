import React from "react";
import { Input, InputWrapper } from "./styles.js";
import { ReactComponent as IconArrow } from "../../images/icon-arrow.svg";

const SearchInput = ({ onClick, onChange }) => {
  return (
    <InputWrapper>
      <Input
        placeholder="Search for an IP address or domain"
        onChange={onChange}
      />
      <span className="iconContainer" onClick={onClick}>
        <IconArrow />
      </span>
    </InputWrapper>
  );
};

export default SearchInput;
