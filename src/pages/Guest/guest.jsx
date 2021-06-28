import React from "react";
import Header from "../../component/Navbar/Header";
import Sidebar from "../../component/Sidebar/Sidebar";
import Content from "../../component/Content/Content";

const guest = () => {
  return (
    <div>
      <Header logged={false} />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default guest;
