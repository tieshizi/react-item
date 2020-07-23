import { httpPost, httpGet } from '../utils/http'
import qs from "querystring"
import base from './base'

const api = {

    getLogin(params) {
        return httpGet(base.login + `?${qs.stringify(params)}`)
    },

    postRegister(params) {
        return httpPost(base.baseUrl + base.login, params)
    }
}

export default api;