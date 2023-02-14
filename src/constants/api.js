export const {
    REACT_APP_API_BASE: API_BASE
} = process.env
// console.log("process.env", process.env);
export const {
    REACT_APP_API_IMAGE_BASE: UPLOAD_URL
} = process.env

export const API_LOGIN = 'admin/charity/charity-login'

export const API_SUPER_ADMIN_LOGIN = '/admin-login/login'

export const API_META = '/auth/metaData'

export const API_CAUSE = '/admin/cause/getAll'

export const API_CATEGORY = '/admin/charity-category/getAll'

export const API_CHARITY_LISTING = '/admin/charity/getAll'

export const API_CHARITY_LISTING_ACCEPT = '/admin/charity/charityList'

export const API_CHARITY_DETAIL = '/admin/charity/get/'

export const API_CHARITY_VERIFICTAION = '/admin/charity/changeVerification'

export const API_IMAGE_UPLOAD = '/local-image/uploadImage'

export const API_CHARITY_REGISTRATION = '/admin/charity/create'

//Common Api
export const API_COUNTRY = '/v1/common/getAllCountry'
export const API_STATE = '/v1/common/getAllState'
export const API_CITY = '/v1/common/getAllCities'


// Admin Cause
export const API_CAUSE_CREATE = '/admin/cause/create'
// export const API_CAUSE_GETALL = '/admin/cause/getAll'
export const API_CAUSE_GETALL = '/admin/cause/causeList'
export const API_CAUSE_DELETE_ID = '/admin/cause/delete'
export const API_CAUSE_GET_ID = '/admin/cause/get/'
export const API_CAUSE_UPDATE_ID = '/admin/cause/update/'
export const API_CAUSE_ACTIVEINACTIVE = '/admin/cause/activeStatus/'

// Charity Category

export const API_CHARITY_CATEGORY_CREATE = '/admin/charity-category/create'
// export const API_CHARITY_CATEGORY_GETALL = '/admin/charity-category/getAll'
export const API_CHARITY_CATEGORY_GETALL = '/admin/charity-category/categoryList'
export const API_CHARITY_CATEGORY_GET_ID = '/admin/charity-category/get/'
export const API_CHARITY_CATEGORY_DELETE_ID = '/admin/charity-category/delete'
export const API_CHARITY_CATEGORY_UPDATE_ID = '/admin/charity-category/update/'
export const API_CHARITY_CATEGORY_ACTIVEINACTIVE = '/admin/charity-category/activeStatus/'

// --------------------------------

export const API_CHARITY_MANAGE_CREATE = '/admin/charity/create'
// export const API_CAUSE_GETALL = '/admin/cause/causeList'
export const API_CHARITY_MANAGE_DELETE_ID = '/admin/charity/delete'
export const API_CHARITY_MANAGE_GET_ID = '/admin/charity/get/'
export const API_CHARITY_MANAGE_UPDATE_ID = '/admin/charity/update/'
export const API_CHARITY_MANAGE_ACTIVEINACTIVE = '/admin/charity/charityStatus/'


export const API_HOMEPAGE_UPDATE = '/admin/homepage/updateHomepage'
export const API_HOMEPAGE_DETAIL = '/admin/homepage/getHomepageDetails'



