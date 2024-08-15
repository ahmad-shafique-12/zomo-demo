
import { SidebarOpen, SidebarClose,} from "./constant";

const initialState = {
    sidebar: "right-[-250px]",
    num:0,
};

const SidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SidebarOpen:
            return { ...state, sidebar: "right-0" }; 
        case SidebarClose:
            return { ...state, sidebar: "right-[-250px]" }; 
            
        default:
            return state;
    }
};

export default SidebarReducer;
