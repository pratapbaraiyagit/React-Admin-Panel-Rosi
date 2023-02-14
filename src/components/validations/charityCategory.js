import patterns from "../../utils/patterns"

export const charityAdd = (value) => {
    let error = {};
    if (!value.category_name || !value.category_name.trim()) {
        error.category_name = "Required Add Charity Category"
    }
    else if (!patterns.alpha_spaces.test(value.category_name)) {
        error.category_name = "Please enter only alphabets";
    }

    return error;
}

export const charityEdit = (value) => {
    let error = {};
    if (!value.category_name || !value.category_name.trim()) {
        error.category_name = "Required Edit Charity Category"
    }
    else if (!patterns.alpha_spaces.test(value.category_name)) {
        error.category_name = "Please enter only alphabets";
    }

    return error;
}