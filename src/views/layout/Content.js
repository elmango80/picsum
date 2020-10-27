import React from "react";

import { StyledContent } from "../../components/layout/SyledLayout";

const Content = (props) => {
  return (
    <StyledContent {...props}>
      <div className="container h-100">
        <div className="h-100 fade show">CONTAINER</div>
      </div>
    </StyledContent>
  );
};

export default Content;
