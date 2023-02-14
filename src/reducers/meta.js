import {
    FETCH_META_F,
    FETCH_META_S
} from '../constants/types';

const initialState = {
    mediaURL: undefined,
    placeholder: undefined,
    error: undefined
};

const metaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_META_S:
            return { ...state, error: undefined, mediaURL: action.payload.data.mediaURL, placeholder: action.payload.data.placeholder };
        case FETCH_META_F:
            return { ...state, error: action.payload.error, mediaURL: undefined, placeholder: undefined };
        default:
            return state;
    }
}

export default metaReducer;