import { ADD_CHARITY_DETAILS_STEPS_1, ADD_CHARITY_DETAILS_STEPS_2, ADD_CHARITY_DETAILS_STEPS_3, ADD_CHARITY_DETAILS_STEPS_4, COUNTRY_F, COUNTRY_S, STATE_F, STATE_S } from "../constants/types";


const initialState = {
  step_1: {},
  step_2: {},
  step_3: {},
  step_4: {},
  country:{},
  state :{}
};
const RegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARITY_DETAILS_STEPS_1:
      return {
        ...state,
        step_1: action.payload,
      };
    case ADD_CHARITY_DETAILS_STEPS_2:
      return {
        ...state,
        step_2: action.payload,
      };
    case ADD_CHARITY_DETAILS_STEPS_3:
      return {
        ...state,
        step_3: action.payload,
      };
    case ADD_CHARITY_DETAILS_STEPS_4:
      return {
        ...state,
        step_4: action.payload,
      };
   case COUNTRY_S:
    return{
      ...state ,
      country:action.payload.data
    }
    case COUNTRY_F :
    return{
      ...state ,
      country:action.payload.message
    }
    case STATE_S:
    return{
      ...state ,
      state:action.payload.data
    }
    case STATE_F :
    return{
      ...state ,
      state:action.payload.message
    }
    default:
      return state;
  }
};

export default RegistrationReducer;
