import { API_CHARITY_CATEGORY_ACTIVEINACTIVE, API_CHARITY_CATEGORY_CREATE, API_CHARITY_CATEGORY_DELETE_ID, API_CHARITY_CATEGORY_GETALL, API_CHARITY_CATEGORY_GET_ID, API_CHARITY_CATEGORY_UPDATE_ID } from "../constants/api";
import { API, CHARITY_CATEGORY_ACTIVEINACTIVE_FAIL, CHARITY_CATEGORY_ACTIVEINACTIVE_SUCCESS, CHARITY_CATEGORY_ADD_FAIL, CHARITY_CATEGORY_ADD_SUCCESS, CHARITY_CATEGORY_EDIT_FAIL, CHARITY_CATEGORY_EDIT_SUCCESS, CHARITY_CATEGORY_LISTING_FAIL, CHARITY_CATEGORY_LISTING_SUCCESS, CHARITY_CATEGORY_UPDATE_FAIL, CHARITY_CATEGORY_UPDATE_SUCCESS } from "../constants/types";

export const charityCategoryListing= (data) => ({
    type: API,
    payload: {
        url: API_CHARITY_CATEGORY_GETALL,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: CHARITY_CATEGORY_LISTING_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CHARITY_CATEGORY_LISTING_FAIL,
            payload: data
        })
    }
})
export const charityCategoryCreate = (data) => ({
    type: API,
    payload: {
        url: API_CHARITY_CATEGORY_CREATE,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: CHARITY_CATEGORY_ADD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CHARITY_CATEGORY_ADD_FAIL,
            payload: data
        })
    }
})
export const charityCategoryEdit = (id) => ({
    type: API,
    payload: {
        url: API_CHARITY_CATEGORY_GET_ID + `${id}`,
        method: 'GET',
        // data : data,
        success: (data) => ({
            type: CHARITY_CATEGORY_EDIT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CHARITY_CATEGORY_EDIT_FAIL,
            payload: data
        })
    }
})

export const charityCategoryActiveInActive = (id) => ({
    type: API,
    payload: {
        url: API_CHARITY_CATEGORY_ACTIVEINACTIVE + id,
        method: 'GET',
        // data: data,
        success: (data) => ({
            type: CHARITY_CATEGORY_ACTIVEINACTIVE_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CHARITY_CATEGORY_ACTIVEINACTIVE_FAIL,
            payload: data
        })
    }
})

export const charityCategoryDelete = (id) => ({
    type: API,
    payload: {
        // url: `${API_CAUSE_DELETE_ID}/${id.id}`,
        url: `${API_CHARITY_CATEGORY_DELETE_ID}/${id.id}`,
        method: 'POST',
        data: id,
        // success: (data) => ({
        //     type: CAUSE_DELETE_SUCCESS,
        //     payload: data
        // }),
        // error: (data) => ({
        //     type: CAUSE_DELETE_FAIL,
        //     payload: data
        // })
    }
})

export const charityCategoryUpdate = (data, id) => ({
    type: API,
    payload: {
        url: API_CHARITY_CATEGORY_UPDATE_ID + id,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: CHARITY_CATEGORY_UPDATE_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CHARITY_CATEGORY_UPDATE_FAIL,
            payload: data
        })
    }
})



