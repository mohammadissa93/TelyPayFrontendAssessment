import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { toast } from "react-toastify";
import { TErrorResponse, TransformResFn } from "../shared/types";

const instance = axios.create({
    baseURL: "https://challenge.telypay.net/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
    }
})

// Request interceptor to pass token from local storage in request headers
instance.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
    }
    return config
})


// response interceptor to catch all errors
instance.interceptors.response.use(function (response) {
    return response;
}, function ({ response }: AxiosError<TErrorResponse>) {
    toast(response?.data?.message, { type: "error", position: toast.POSITION.TOP_CENTER })
    console.log('response',response)
});


/**
 * @param string url - endpoint url
 * @param transformResponse callback to change response data
 * @param {AxiosRequestConfig} config - get request config
 * @returns Promise
 */
const get = <T = AxiosResponse, R = Record<string, any>>(url: string, transformResponse?: TransformResFn<T, R>, config?: AxiosRequestConfig): Promise<T> => {
    return instance.get(url, config).then((res: any) => {
        return new Promise<T>((resolve) => {
            if (transformResponse) {
                resolve(transformResponse(res.data))
            }
            else {
                resolve(res)
            }
        })
    })

}

/**
 * @param string url - endpoint url
 * @param Record<string,any> data - reqeust data
 * @param {AxiosRequestConfig} requestConfig - post request config
 * @returns Promise
 */
const post = <T = AxiosResponse, R = Record<string, any>>(url: string, data: Record<string, any>, transformResponse?: TransformResFn<T, R>, config?: AxiosRequestConfig): Promise<T> => {
    return instance.post(url, data, config).then((res: any) => {
        return new Promise<T>((resolve) => {
            if (transformResponse) {
                resolve(transformResponse(res.data))
            }
            else {
                resolve(res)
            }
        })
    });
}

/**
 * @param string url - endpoint url
 * @param Record<string,any> data - reqeust data
 * @param {AxiosRequestConfig} requestConfig - put request config
 * @returns Promise
 */
const put = <T = AxiosResponse, R = Record<string, any>>(url: string, data: Record<string, any>, transformResponse?: TransformResFn<T, R>, config?: AxiosRequestConfig): Promise<T> => {
    return instance.put(url, data, config).then((res: any) => {
        return new Promise<T>((resolve) => {
            if (transformResponse) {
                resolve(transformResponse(res.data))
            }
            else {
                resolve(res)
            }
        })
    });
}


/**
 * @param string url - endpoint url
 * @param {AxiosRequestConfig} requestConfig - delete request config
 * @returns Promise
 */
const remove = <T = AxiosResponse>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return instance.delete(url, config)
}


const API = {
    get,
    post,
    put,
    remove
}

export default API