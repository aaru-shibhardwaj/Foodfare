import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlices from "./slices/CategorySlices";
import SearchSlice from "./slices/SearchSlice";
const Store=configureStore({
    reducer:{
        cart:CartSlice,
        category: CategorySlices,
        search:SearchSlice,
    }
});
export default Store;