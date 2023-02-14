import { useEffect } from "react";
import { doLogout } from "../actions/auth";

//To concate the path for the public folder
export const toAbsoluteUrl = pathname => (process.env.PUBLIC_URL + pathname)

// outside click
export const OutSideClick = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};

export const setupAxios = (axios, store) => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
        axios.defaults.headers.common['Authorization'] = token?.data?.authToken;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
    }


    axios.interceptors.response.use(null, (err) => {
        if (err.response) {
            if (err.response.status === 403) {
                store.dispatch(doLogout())

                return Promise.reject(err);
            } else return Promise.reject(err);
        } else if (err.request) {
            return Promise.reject({
                response: {
                    data: {
                        message: "Something went wrong, Please try again later!!!"
                    }
                }
            });
        }
    });
}

export const debounce = (func) => {
    let timer;
    return function (...args) {
        const context = this;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
        }, 700);
    };
};