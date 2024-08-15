import { applyMiddleware, combineReducers, createStore } from "redux"

import { thunk } from "redux-thunk"
import SidebarReducer from "./reducer"
import CartReducer from "./reducer2"


const store = createStore(
    combineReducers({
    Sidebar:SidebarReducer,
    Cart :CartReducer
    
        
        
    })
    ,applyMiddleware(thunk)
)

export default store