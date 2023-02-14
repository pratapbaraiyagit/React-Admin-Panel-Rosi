import { API_CAUSE_ACTIVEINACTIVE, API_CAUSE_CREATE, API_CAUSE_DELETE, API_CAUSE_DELETE_ID, API_CAUSE_GETALL, API_CAUSE_GET_ID, API_CAUSE_UPDATE_ID, API_IMAGE_UPLOAD } from "../constants/api";
import { API, CAUSE_ACTIVEINACTIVE_FAIL, CAUSE_ACTIVEINACTIVE_SUCCESS, CAUSE_ADD_FAIL, CAUSE_ADD_SUCCESS, CAUSE_DELETE_FAIL, CAUSE_DELETE_SUCCESS, CAUSE_EDIT_FAIL, CAUSE_EDIT_SUCCESS, CAUSE_LISTING_FAIL, CAUSE_LISTING_SUCCESS, CAUSE_UPDATE_F, CAUSE_UPDATE_S } from "../constants/types";

export const causeListing = (data) => ({
    type: API,
    payload: {
        url: API_CAUSE_GETALL,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: CAUSE_LISTING_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CAUSE_LISTING_FAIL,
            payload: data
        })
    }
})

export const causeDelete = (id) => ({
    type: API,
    payload: {
        url: `${API_CAUSE_DELETE_ID}/${id.id}`,
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

export const causeEdit = (id) => ({
    type: API,
    payload: {
        url: API_CAUSE_GET_ID + `${id}`,
        method: 'GET',
        // data : data,
        success: (data) => ({
            type: CAUSE_EDIT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CAUSE_EDIT_FAIL,
            payload: data
        })
    }
})

export const causeActiveInActive = (id) => ({
    type: API,
    payload: {
        url: API_CAUSE_ACTIVEINACTIVE + id,
        method: 'GET',
        // data: data,
        success: (data) => ({
            type: CAUSE_ACTIVEINACTIVE_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CAUSE_ACTIVEINACTIVE_FAIL,
            payload: data
        })
    }
})

export const causeUpdate = (data, id) => ({
    type: API,
    payload: {
        url: API_CAUSE_UPDATE_ID + `${id}`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: CAUSE_UPDATE_S,
            payload: data
        }),
        error: (data) => ({
            type: CAUSE_UPDATE_F,
            payload: data
        })
    }
})
export const causeCreate = (data) => ({
    type: API,
    payload: {
        url: API_CAUSE_CREATE,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: CAUSE_ADD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CAUSE_ADD_FAIL,
            payload: data
        })
    }
})



export const doUploadImageCause = (data) => {
    let formData = new FormData()

    for (var key in data) {
        if ((data[key] && Array.isArray(data[key])) || typeof data[key] === "object") {
            formData.append(key, JSON.stringify(data[key]))
        }
        else if (data[key]) {
            formData.append(key, data[key])
        }
    }
    formData.delete('image')

    if (data.image && data.image.length) { // && data.image instanceof Blob
        // for (var i = 0; i < data.image.length; i++) {
        //     formData.append('image', data.image[i].file, data.image[i].file.name)
        // }
        formData.append('image', data.image[0].file, data.image[0].file.name)
    }
    else {
        formData.delete('image')
    }

    return ({
        type: API,
        payload: {
            url: API_IMAGE_UPLOAD,
            method: 'POST',
            data: formData,
            // success: (data) => ({
            //     type: CATEGORY_S ,
            //     payload: data
            // }),
            // error: (data) => ({
            //     type:CATEGORY_F ,
            //     payload: data
            // })
        }
    })
}