import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
search: "" 
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
  
    addSearch : (state,{payload}) =>{
        state.search = payload
    }
 
  },
});

export const { addSearch } = search.actions;
export default search.reducer;
