import React from "react";
import { StyledHeader } from "../../components/layout/SyledLayout";

const Header = (props) => {
  return (
    <StyledHeader {...props}>
      <div className="d-flex flex-fill px-3">
        <div>HEADER</div>
      </div>
    </StyledHeader>
  );
};

export default Header;
