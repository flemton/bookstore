import { createSlice } from "@reduxjs/toolkit";
import Categories from "../../components/categories";

const initialState = {
    categories: []
}

const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        checkStatus: () =>
        'Under construction'
    }
})

export default categoriesSlice.reducer;