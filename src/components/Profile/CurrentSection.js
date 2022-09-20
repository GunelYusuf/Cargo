import React from 'react';
import MyOrders from "./MyOrders";
import ProductLink from "./ProductLink";
import Settings from "./Settings";
import MyAddress from "./MyAddress";
import Balance from './Balance';
import MyOrderBalance from "./MyOrderBalance";
import MyCarryoverBalance from "./MyCarryoverBalance";


function CurrentSection({step,onAdd}) {
    console.log(step)
      switch (step) {
            case 1:
                return <MyOrders/>;
            case 2:
                return <ProductLink onAdd={onAdd}/>;
            case 3:
                return <Settings/>;
          case 4:
              return <MyAddress/>
          case 5:
              return <Balance/>
          case 6:
              return  <MyOrderBalance/>;
          case 7:
              return  <MyCarryoverBalance/>;
            default:
               return <MyOrders/>
        }
}

export default CurrentSection;