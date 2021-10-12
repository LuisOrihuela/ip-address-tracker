import React from "react";

import SearchInput from "../SearchInput/SearchInput";

import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>IP Adress Tracker</h1>
      <SearchInput />
    </HeaderContainer>
  );
};

export default Header;
