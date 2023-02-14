import { API_HOMEPAGE_DETAIL, API_HOMEPAGE_UPDATE } from "../constants/api";
import { API, HOMEPAGE_DETAIL_F, HOMEPAGE_DETAIL_S, HOMEPAGE_UPDATE_F, HOMEPAGE_UPDATE_S } from "../constants/types";

export const homepageUpdate = (data) => ({
    type: API,
    payload: {
        url: API_HOMEPAGE_UPDATE,
        method: 'POST',
        data : data,
        success: (data) => ({
            type: HOMEPAGE_UPDATE_S,
            payload: data
        }),
        error: (data) => ({
            type:HOMEPAGE_UPDATE_F,
            payload: data
        })
    }  
})


export const homepageDetail = () => ({
    type: API,
    payload: {
        url: API_HOMEPAGE_DETAIL,
        method: 'GET',
        // data : data,
        success: (data) => ({
            type: HOMEPAGE_DETAIL_S,
            payload: data
        }),
        error: (data) => ({
            type:HOMEPAGE_DETAIL_F,
            payload: data
        })
    }  
})