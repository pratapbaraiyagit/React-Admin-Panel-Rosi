import { HOMEPAGE_DETAIL_S, HOMEPAGE_UPDATE_F, HOMEPAGE_UPDATE_S } from "../constants/types";

const initialState = {
    homepage: {},
    homepagedetail:{}
}

const CmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOMEPAGE_UPDATE_S:
            return {
                ...state, homepage: action.payload.data
            }
        case HOMEPAGE_UPDATE_F:
            return {
                ...state, homepage: action.payload.message
            }
        default:
            return state;
        case HOMEPAGE_DETAIL_S:
            return {
                ...state, homepagedetail: action.payload.data
            }
        case HOMEPAGE_UPDATE_F:
            return {
                ...state, homepagedetail: action.payload.message
            }
    }
}
export default CmsReducer;
