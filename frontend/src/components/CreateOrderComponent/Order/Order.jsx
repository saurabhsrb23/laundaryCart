import React from "react";

import "./Order.css";

import { Link } from "react-router-dom";
import SideNav from "../../SideNav/SideNav";
import MainHeader from "../../MainHeader/MainHeader";
import OrderFooter from "../../OrderFooter/OrderFooter";

const Order = () => {
  return (
    <>
      <MainHeader/>
      <div className="ordergridContainer">
        <div className="verticalnav">
          <SideNav />
        </div>
        <div className="ordercomponent">
              <div className="mainCon">
                <div>
              <p id="pBTN">Plz Create Your Order</p>
            <Link className="linkstyle" to="/createorder">
          <button className="Cbtn"> create</button>
            </Link>

                </div>
              </div>
        </div>
      </div>
      <OrderFooter />
    </>
  );
};

export default Order;
