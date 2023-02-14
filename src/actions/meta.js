import {
    API_META
} from "../constants/api";
import {
    API,
    FETCH_META_F,
    FETCH_META_S,
} from "../constants/types";

export const storeMetaData = () => ({
    type: API,
    payload: {
        url: API_META,
        method: 'GET',
        hideLoader: false,
        success: (data) => ({
            type: FETCH_META_S,
            payload: data
        }),
        error: (data) => ({
            type: FETCH_META_F,
            payload: data
        })
    }
})