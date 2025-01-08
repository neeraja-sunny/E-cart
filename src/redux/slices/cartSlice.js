import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartItems",
    initialState: [],
    reducers: {
        // action-name: reducer function
        addtoCart: (state,actionByComponent)=>{
            const exixtingProduct = state.find(item=>item.id==actionByComponent.payload.id)
            if(exixtingProduct){

            }else{
                state.push({...actionByComponent.payload,quantity: 1,totalPrice: actionByComponent.payload.price})
            }
        }
    }
})