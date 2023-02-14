import patterns from "../../utils/patterns"

export const causeAdd = (value) => {
    let error = {};
    if (!value.causename || !value.causename.trim()) {
        error.causename = "Required Cause Name"
    }
    else if (!patterns.alpha_spaces.test(value.causename)) {
        error.causename = "Please enter only alphabets";
    }
    if (!value.sub_title || !value.sub_title.trim()) {
        error.sub_title = "Required Cause Title"
    }
    else if (!patterns.alpha_spaces.test(value.sub_title)) {
        error.sub_title = "Please enter only alphabets";
    }
    if (!value.description || !value.description.trim()) {
        error.description = "Required Cause Description"
    }
    else if (!patterns.alpha_spaces.test(value.description)) {
        error.description = "Please enter only alphabets";
    }
    // if (!value.description || !value.description.trim()) {
    //     error.description = "Required Cause Titdasasle"
    // }

    return error;
}

export const causeEdit = (value) => {
    let error = {};
    if (!value.causename || !value.causename.trim()) {
        error.causename = "Required Cause Name"
    }
    else if (!patterns.alpha_spaces.test(value.causename)) {
        error.causename = "Please enter only alphabets";
    }
    if (!value.sub_title || !value.sub_title.trim()) {
        error.sub_title = "Required Cause Title"
    }
    else if (!patterns.alpha_spaces.test(value.sub_title)) {
        error.sub_title = "Please enter only alphabets";
    }
    if (!value.description || !value.description.trim()) {
        error.description = "Required Cause Description"
    }
    else if (!patterns.alpha_spaces.test(value.description)) {
        error.description = "Please enter only alphabets";
    }
    // if (!value.description || !value.description.trim()) {
    //     error.description = "Required Cause Titdasasle"
    // }

    return error;
}