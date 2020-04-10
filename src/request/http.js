import axios from "axios"
import {Toast} from "vant";

var instance = axios.create()

//环境切换
if (process.env.NODE_ENV == "development") {
    instance.defaults.baseURL = 'http://dev.saileikeji.com:10101/';
} else if (process.env.NODE_ENV = 'production') {
    instance.defaults.baseURL = 'https://api.geek.aimiu.net/';
}

// 设置请求时间
instance.defaults.timeout = 10000;
// post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//请求拦截
instance.interceptors.request.use(
    config => {
        const token = "c32703da76a44c97b0896f9dae39a1dd";
        config.headers['token'] = token;
        return config;
    }, error => {
        return Promise.error(error);
    }
)
/**
 * 响应拦截
 */
instance.interceptors.response.use(
    response => {

        if (response.status == 200) {
            if (response.data.code == "000") {
                return Promise.resolve(response.data);
            } else {
                Toast.fail({
                    message: response.data.message
                })
                return Promise.reject(response.data);
            }
        } else {
            return Promise.reject(response);
        }

    }, error => {
        return Promise.reject(error.response);
    }
)


export default instance;


