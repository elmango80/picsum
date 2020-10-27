import React from "react";
import "../../css/app.css";

import Header from "./Header";
import Content from "./Content";

const Layout = (props) => {
  return (
    <div className="app">
      <div className="app--wrapper">
        <Header className="app--header" {...props} />
        <div className="app--body">
          <Content className="app--main" {...props} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
