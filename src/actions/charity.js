import { API_CAUSE_ID, API_CHARITY_DETAIL, API_CHARITY_LISTING, API_CHARITY_LISTING_ACCEPT, API_CHARITY_MANAGE_ACTIVEINACTIVE, API_CHARITY_MANAGE_CREATE, API_CHARITY_MANAGE_DELETE_ID, API_CHARITY_MANAGE_GET_ID, API_CHARITY_MANAGE_UPDATE_ID, API_CHARITY_VERIFICTAION } from "../constants/api";
import { API, CAUSE_ID_F, CAUSE_ID_S, CHARITY_DETAIL_F, CHARITY_DETAIL_S, CHARITY_LISTING_ACCEPT_FAIL, CHARITY_LISTING_ACCEPT_SUCCESS, CHARITY_LISTING_F, CHARITY_LISTING_S, CHARITY_MANAGE_ACTIVEINACTIVE_FAIL, CHARITY_MANAGE_ACTIVEINACTIVE_SUCCESS, CHARITY_MANAGE_ADD_FAIL, CHARITY_MANAGE_ADD_SUCCESS, CHARITY_MANAGE_EDIT_FAIL, CHARITY_MANAGE_EDIT_SUCCESS, CHARITY_MANAGE_UPDATE_FAIL, CHARITY_MANAGE_UPDATE_SUCCESS, CHARITY_VERIFICTAION_F, CHARITY_VERIFICTAION_S } from "../constants/types";

export const Charitylisting = (data) =>({
    type: API,
    payload: {
        url: API_CHARITY_LISTING,
        method: 'POST',
        data : data,
        hideLoader:false,
        success: (data) => ({
            type: CHARITY_LISTING_S,
            payload: data
        }),
        error: (data) => ({
            type:CHARITY_LISTING_F,
            payload: data
        })
    }
})

export const Charitydetail = (id) =>({
    type: API,
    payload: {
        url: API_CHARITY_DETAIL +`${id}`,
        method: 'GET',
        success: (data) => ({
            type: CHARITY_DETAIL_S,
            payload: data
        }),
        error: (data) => ({
            type:CHARITY_DETAIL_F,
            payload: data
        })
    } 
})

export const Charityverifictaion = (data) => ({
    type: API,
    payload: {
        url: API_CHARITY_VERIFICTAION,
        method: 'POST',
        data : data,
        success: (data) => ({
            type: CHARITY_VERIFICTAION_S,
            payload: data
        }),
        error: (data) => ({
            type:CHARITY_VERIFICTAION_F,
            payload: data
        })
    }  
})


export const CharityManagementListing = (data) =>({
    type: API,
    payload: {
        url: API_CHARITY_LISTING_ACCEPT,
        method: 'POST',
        data : data,
        success: (data) => ({
            type: CHARITY_LISTING_ACCEPT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type:CHARITY_LISTING_ACCEPT_FAIL,
            payload: data
        })
    }
})
export const CharityManagementCreate = (data) => ({
    type: API,
    payload: {
        url: API_CHARITY_MANAGE_CREATE,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: CHARITY_MANAGE_ADD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CHARITY_MANAGE_ADD_FAIL,
            payload: data
        })
    }
})

export const charityManagementEdit = (id) => ({
    type: API,
    payload: {
        url: API_CHARITY_MANAGE_GET_ID + `${id}`,
        method: 'GET',
        // data : data,
        success: (data) => ({
            type: CHARITY_MANAGE_EDIT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CHARITY_MANAGE_EDIT_FAIL,
            payload: data
        })
    }
})

export const charityManageUpdate = (data, id) => ({
    type: API,
    payload: {
        url: API_CHARITY_MANAGE_UPDATE_ID + `${id}`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: CHARITY_MANAGE_UPDATE_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CHARITY_MANAGE_UPDATE_FAIL,
            payload: data
        })
    }
})

export const charityManageDelete = (id) => ({
    type: API,
    payload: {
        url: `${API_CHARITY_MANAGE_DELETE_ID}/${id.id}`,
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

export const charityActiveInActive = (id) => ({
    type: API,
    payload: {
        url: API_CHARITY_MANAGE_ACTIVEINACTIVE + id,
        method: 'POST',
        // data: data,
        success: (data) => ({
            type: CHARITY_MANAGE_ACTIVEINACTIVE_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CHARITY_MANAGE_ACTIVEINACTIVE_FAIL,
            payload: data
        })
    }
})