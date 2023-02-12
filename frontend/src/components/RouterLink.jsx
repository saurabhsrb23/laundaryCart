import React from "react";

import MainHeader from "./MainHeader/MainHeader";
import SideNav from "./SideNav/SideNav";

import OrderFooter from "./OrderFooter/OrderFooter";

const RouterLink = () => {
  return (
    <>
      <MainHeader />
          <SideNav />
      <OrderFooter />
    </>
  );
};

export default RouterLink;
;