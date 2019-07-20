import {HttpService} from "./HttpService";


export class AuthService {

    static baseURL() {
        return HttpService.apiURL() + "/auth";
    }

    static register(fields) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${AuthService.baseURL()}/register`, fields, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static login(email, password) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${AuthService.baseURL()}/login`, {
                email: email,
                password: password
            }, function (data) {
                resolve(data);
            }, function (textStatus) {
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
            id: JSON.parse(window.atob(base64)).id,
            email: JSON.parse(window.atob(base64)).email
        };
    }

    static getCurrentUserFromDB() {
        return new Promise((resolve, reject) => {
            HttpService.get(`${AuthService.baseURL()}/user`,
                function (data) {
                    resolve(data);
                }, function (textStatus) {
                    reject(textStatus);
                });
        });
    }

    static isUserADriver() {
        return new Promise((resolve, reject) => {
            (async function () {
                const user = await AuthService.getCurrentUserFromDB();
                return user.driver;
            })().then(resolve).catch(reject);
        });
    }

    static isUserADeliveryClient() {
        return new Promise((resolve, reject) => {
            (async function () {
                const user = await AuthService.getCurrentUserFromDB();
                return user.deliveryClient;
            })().then(resolve).catch(reject);
        });
    }

    static updateUserType(driver, deliveryClient) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${AuthService.baseURL()}/updateType`, {
                "driver": !!driver,
                "deliveryClient": !!deliveryClient
            }, function (data) {
                resolve(data);
            }, function (status) {
                reject(status);
            })
        });
    }

    static logout() {
        window.localStorage.removeItem('jwtToken');
    }
}

