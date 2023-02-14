import { CAUSE_ID_F, CAUSE_ID_S, CHARITY_DETAIL_F, CHARITY_DETAIL_S, CHARITY_LISTING_ACCEPT_FAIL, CHARITY_LISTING_ACCEPT_SUCCESS, CHARITY_LISTING_F, CHARITY_LISTING_S, CHARITY_MANAGE_ADD_FAIL, CHARITY_MANAGE_ADD_SUCCESS, CHARITY_MANAGE_EDIT_FAIL, CHARITY_MANAGE_EDIT_SUCCESS } from "../constants/types";

const initialState = {
  charityList: {},
  chairtyDetail: {},
  cause: {},
  charityNewList: {},
  addCharityManage: {},
  editCharityManage: {},
};
const ChairtyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARITY_LISTING_S:
      return {
        ...state,
        charityList: action.payload.data,
      };
    case CHARITY_LISTING_F:
      return {
        ...state,
        charityList: action.payload.message,
      };
    case CHARITY_DETAIL_S:
      return {
        ...state,
        chairtyDetail: action.payload.data,
      };
    case CHARITY_DETAIL_F:
      return {
        ...state,
        chairtyDetail: action.payload.data,
      };
    case CHARITY_LISTING_ACCEPT_SUCCESS:
      return {
        ...state,
        charityNewList: action.payload.data,
      };
    case CHARITY_LISTING_ACCEPT_FAIL:
      return {
        ...state,
        charityNewList: action.payload.message,
      };

      //add charity
    case CHARITY_MANAGE_ADD_SUCCESS:
      return {
        ...state,
        addCharityManage: action.payload.data,
      };
    case CHARITY_MANAGE_ADD_FAIL:
      return {
        ...state,
        addCharityManage: action.payload.message,
      };

      //EDIT charity managent
      case CHARITY_MANAGE_EDIT_SUCCESS:
        return {
          ...state,
          editCharityManage: action.payload,
        };
      case CHARITY_MANAGE_EDIT_FAIL:
        return {
          ...state,
          editCharityManage: action.payload,
        };




    default:
      return state;
  }
};

export default ChairtyReducer;