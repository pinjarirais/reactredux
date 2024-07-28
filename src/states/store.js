import { configureStore } from "@reduxjs/toolkit"
import incdecReducer from "./reducers/index"
import userformSlice  from "./reducers/userform";

export default configureStore({
    reducer: {
        number: incdecReducer,
        userform: userformSlice,
    }
});