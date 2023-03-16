import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Store/CartSlice";


const Store = configureStore({
    reducer:{
        cart: cartReducer
    },
});

export default Store;