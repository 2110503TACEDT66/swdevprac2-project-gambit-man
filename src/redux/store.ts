import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import { useSelector,TypedUseSelectorHook } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "rootPersist",
    storage

}

const rootRedducer = combineReducers({cartSlice})
const reduxPesistedReducer = persistReducer(persistConfig, rootRedducer)

export const store = configureStore({
    reducer: reduxPesistedReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector