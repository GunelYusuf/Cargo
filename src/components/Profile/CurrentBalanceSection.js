import React from 'react';
import MyCarryoverBalance from "./MyCarryoverBalance";
import MyOrderBalance from "./MyOrderBalance";

function CurrentSection({step}) {
    console.log(step)
    switch (step) {
        case 1:
            return <MyCarryoverBalance/>;
        case 2:
            return <MyOrderBalance/>;
        default:
            return <MyCarryoverBalance/>
    }
}

export default CurrentSection;