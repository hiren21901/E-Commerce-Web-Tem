import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({

    name: 'cart',
    initialState:[],
    reducers: {
        additem(state, action) {
            state.push(action.payload);
        },
        remove(state,action){
            state.splice(action.payload,1)
        },
    },
})

export const { additem, remove} = CartSlice.actions;

export default CartSlice.reducer;