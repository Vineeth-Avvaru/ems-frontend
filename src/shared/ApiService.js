import { BASEURL } from '../shared/baseUrl';
import { ApiTypes } from "./ApiTypes";

const standardHeader = {
    'Content-Type' : 'application/json'
}

/**
 * GET api calls. Receive responses as promise
 * @param {string} url remaining part of url. Must start with '/'
 * @param {object} body optional for get. Should be JSON.
 * @param {object} headers optional 
 */
export function apiServiceGet (url, headers = standardHeader) {
    return fetch (BASEURL + url, {
        method: ApiTypes.GET,
        headers: headers
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}

/**
 * POST api calls. Receive responses as promise
 * @param {string} url remaining part of url. Must start with '/'
 * @param {object} body optional but recommended. Should be JSON.
 * @param {object} headers optional 
 */
export function apiServicePost (url, body = {}, headers = standardHeader) {
    return fetch (BASEURL + url, {
        method: ApiTypes.POST,
        body: JSON.stringify(body),
        headers: headers
    })
    .then(response => response.json())
}