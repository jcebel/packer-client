import {HttpService} from "./HttpService";


export default class UserService {

    static baseURL() {return "http://localhost:3000/auth"; }

    static register(fields) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/register`, fields, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static login(email, password) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/login`, {
                email: email,
                password: password
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static isAuthenticated() {
        return !!window.localStorage['jwtToken'];
    }

    static getCurrentUser() {
        let token = window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return {
            id : JSON.parse(window.atob(base64)).id,
            email: JSON.parse(window.atob(base64)).email
        };
    }

    static logout(){
        window.localStorage.removeItem('jwtToken');
    }
}

