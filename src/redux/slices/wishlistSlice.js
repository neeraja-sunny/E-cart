import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers:{
        addtoWishlist: (state,actionFromView)=>{
            state.push(actionFromView.payload)
        },
        removeItem: (state,actionFromWishlist)=>{
            return state.filter(item=>item.id!= actionFromWishlist.payload)
        }
    }
})

export const {addtoWishlist,removeItem} = wishlistSlice.actions
export default wishlistSlice.reducer