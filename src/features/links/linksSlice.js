import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    links: [
        {
            productId:1,
            productTitle:"Ölçü/Rəng<",
            productColor:"qara / s",
            productLink:"https://www.zara.com/tr/tr/kemerli-pilili-midi-elbise-p08741247.html?v1=184842420&amp;v2=2113500",
            productPrice:56,
            ProductKargoPrice:5,
            ProductTotalPrice:63.13,
            ProductCount:1
        },
        {
            productId:2,
            productTitle:"Ölçü/Rəng<",
            productColor:"qara / s",
            productLink:"https://www.zara.com/tr/tr/kemerli-pilili-midi-elbise-p08741247.html?v1=184842420&amp;v2=2113500",
            productPrice:56,
            productCargoPrice:5,
            productTotalPrice:63.13,
            productCount:1
        }
    ],
}


export const linksSlice = createSlice({
    name:'links',
    initialState,
    reducers: {
        linksCal: (state,action) => {
            state.links=action.payload
        }
    },
})

export const { linksCal } = linksSlice.actions

export default linksSlice.reducer;