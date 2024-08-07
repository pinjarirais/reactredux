import {createSlice} from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
    name: 'incdec',
    initialState: 0,
    reducers: {
        Inc: (state, action) =>{
            return state += action.payload;
        },
        Dec: (state, action) =>{  
            if(state === 0){
                return state = 0;
            }
            return state -= action.payload;                
              
                  
        }
    }
});

export const {Inc, Dec} = incdecSlice.actions;
export default incdecSlice.reducer;