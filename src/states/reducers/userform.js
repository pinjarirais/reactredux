import {createSlice, nanoid} from "@reduxjs/toolkit";

// const initialState = {
//     users: []
// }

export const userformSlice = createSlice({
    name: 'userinputdata',
    initialState:{
        users: [],
    },
    reducers: {
        inputData: (state, action) =>{
            console.log(action.payload)
            state.users.push(action.payload)
        },
        removeUser: (state, action) =>{
            console.log(action)
            const data = state.users.filter((item)=>{
                return item.id !== action.payload 
            })

            state.users = data;
        }
        
    }
});

export const {inputData, removeUser} = userformSlice.actions;
export default userformSlice.reducer;