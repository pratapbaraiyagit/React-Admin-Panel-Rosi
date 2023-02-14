import { CHARITY_CATEGORY_ACTIVEINACTIVE_FAIL, CHARITY_CATEGORY_ACTIVEINACTIVE_SUCCESS, CHARITY_CATEGORY_ADD_FAIL, CHARITY_CATEGORY_ADD_SUCCESS, CHARITY_CATEGORY_EDIT_FAIL, CHARITY_CATEGORY_EDIT_SUCCESS, CHARITY_CATEGORY_LISTING_FAIL, CHARITY_CATEGORY_LISTING_SUCCESS } from "../constants/types";

const initialState = {
    charityCategoryList: {},
    addCharityCategory: {},
    editCharityCategory: {},
    activeCharityCategory: {},
};
const charityCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHARITY_CATEGORY_LISTING_SUCCESS:
            return {
                ...state,
                charityCategoryList: action.payload.data,
            };
        case CHARITY_CATEGORY_LISTING_FAIL:
            return {
                ...state,
                charityCategoryList: action.payload.message,
            };

        //add charity
        case CHARITY_CATEGORY_ADD_SUCCESS:
            return {
                ...state,
                addCharityCategory: action.payload.data,
            };
        case CHARITY_CATEGORY_ADD_FAIL:
            return {
                ...state,
                addCharityCategory: action.payload.message,
            };

        //EDIT cause
        case CHARITY_CATEGORY_EDIT_SUCCESS:
            return {
                ...state,
                editCharityCategory: action.payload,
            };
        case CHARITY_CATEGORY_EDIT_FAIL:
            return {
                ...state,
                editCharityCategory: action.payload,
            };


        // ACTIVE inActive
        case CHARITY_CATEGORY_ACTIVEINACTIVE_SUCCESS:
            return {
                ...state,
                activeCharityCategory: action.payload,
            };
        case CHARITY_CATEGORY_ACTIVEINACTIVE_FAIL:
            return {
                ...state,
                activeCharityCategory: action.payload,
            };

        default:
            return state;
    }
};

export default charityCategoryReducer;