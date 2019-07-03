"use strict";

import {HttpService} from "./HttpService";


export default class UserService {
    constructor() {
    }

    static baseURL() {return "http://localhost:3000/auth"; }

    static register(fields) {
        console.log("UService.register: " + JSON.stringify(fields));
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/register`, fields, function(data) {
                console.log("UService resolve: " + JSON.stringify(data));
                resolve(data);
            }, function(textStatus) {
                console.log("UService reject: " + JSON.stringify(textStatus));
                reject(textStatus);
            });
        });
    }
}

