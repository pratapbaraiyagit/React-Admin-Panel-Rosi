import { API_CATEGORY, API_CAUSE, API_CHARITY_REGISTRATION, API_CITY, API_COUNTRY, API_IMAGE_UPLOAD, API_STATE } from "../constants/api";
import { API, CATEGORY_F, CATEGORY_S, CAUSE_F, CAUSE_S, CITY_F, CITY_S, COUNTRY_F, COUNTRY_S, STATE_F, STATE_S } from "../constants/types";

export const doRegister = (data) => ({
    type: API,
    payload: {
        url: API_CHARITY_REGISTRATION,
        method: 'POST',
        data
    }
})

export const addTOCause = (data) => ({
    type: API,
    payload: {
        url: API_CAUSE,
        method: 'POST',
        data,
        success: (data) => ({
            type: CAUSE_S,
            payload: data
        }),
        error: (data) => ({
            type: CAUSE_F,
            payload: data
        })
    }

})

export const addTOCategory = (data) => ({
    type: API,
    payload: {
        url: API_CATEGORY,
        method: 'POST',
        data,
        success: (data) => ({
            type: CATEGORY_S,
            payload: data
        }),
        error: (data) => ({
            type: CATEGORY_F,
            payload: data
        })
    }
})

export const addTOCountry =()=>({
    type: API,
    payload: {
        url: API_COUNTRY,
        method: 'GET',
        // data,
        success: (data) => ({
            type: COUNTRY_S,
            payload: data
        }),
        error: (data) => ({
            type: COUNTRY_F,
            payload: data
        })
    }
})

export const addTOState =(data)=>({
    type: API,
    payload: {
        url: API_STATE,
        method: 'POST',
        data,
        success: (data) => ({
            type: STATE_S,
            payload: data
        }),
        error: (data) => ({
            type: STATE_F,
            payload: data
        })
    }
})
export const addTOCity =(data)=>({
    type: API,
    payload: {
        url: API_CITY,
        method: 'POST',
        data,
        success: (data) => ({
            type: CITY_S,
            payload: data
        }),
        error: (data) => ({
            type: CITY_F,
            payload: data
        })
    }
})

export const doUploadImage = (data) => {
    console.log(data)
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
