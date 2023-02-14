// import {   CAUSE_ID_F, CAUSE_ID_S,  } from "../constants/types";
import { API, CAUSE_DETAIL_SUCCESS, CAUSE_DETAIL_FAIL, CAUSE_LISTING_FAIL, CAUSE_LISTING_SUCCESS, CAUSE_ADD_FAIL, CAUSE_ADD_SUCCESS, CAUSE_DELETE_FAIL, CAUSE_DELETE_SUCCESS, CAUSE_EDIT_FAIL, CAUSE_EDIT_SUCCESS,  CAUSE_UPDATE_F, CAUSE_UPDATE_S } from "../constants/types";
const initialState = {
  causeList: {},
  causeDetail: {},
  cause: {},
  addCause: {},
  editCause: {},
};
const CauseReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAUSE_LISTING_SUCCESS:
      return {
        ...state,
        causeList: action.payload.data,
      };
    case CAUSE_LISTING_FAIL:
      return {
        ...state,
        causeList: action.payload.message,
      };
    case CAUSE_DETAIL_SUCCESS:
      return {
        ...state,
        causeDetail: action.payload.data,
      };
    case CAUSE_DETAIL_FAIL:
      return {
        ...state,
        causeDetail: action.payload.message,
      };
      
    //add cause
    case CAUSE_ADD_SUCCESS:
      return {
        ...state,
        addCause: action.payload.data,
      };
    case CAUSE_ADD_FAIL:
      return {
        ...state,
        addCause: action.payload.message,
      };

      //EDIT cause
      case CAUSE_EDIT_SUCCESS:
        return {
          ...state,
          editCause: action.payload,
        };
      case CAUSE_EDIT_FAIL:
        return {
          ...state,
          editCause: action.payload,
        };

    default:
      return state;
  }
};

export default CauseReducer;