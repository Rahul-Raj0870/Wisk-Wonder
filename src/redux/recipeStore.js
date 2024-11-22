import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './slice/recipeSlice'

const recipeStore=configureStore({
    reducer:{
        recipeReducer:recipeSlice
    }
})

export default recipeStore;

