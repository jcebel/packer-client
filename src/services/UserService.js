import {HttpService} from "./HttpService";

export class UserService {

    static baseURL() {return HttpService.apiURL() + "/user"; }

    static getDeliveriesByUserId(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${this.baseURL()}/${id}/goodstodeliver`, function (data) {
                if (data !== undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    console.log('Log: Error while retrieving delivery goods');
                    reject('Error while retrieving delivery goods')
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

<<<<<<< HEAD
    static isUserADriver() {
        let token = window.localStorage['jwtToken'];
        if (!token) return {};

        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/isDriver`, function (data) {
                if (data !== undefined || Object.keys(data).length !== 0) {
                    resolve(data.isDriver);
                } else {
                    console.log('Log: Error while retrieving delivery goods');
                    reject('Error while retrieving delivery goods')
                }
            }, function (err) {
                reject(err);
            });
        });
    }
=======
    static getDriverId() {
        return new Promise((resolve, reject) => {
            HttpService.get(`${this.baseURL()}/driverID`, function (data) {
                if(data !== undefined || Object.keys(data).length !== 0){
                    resolve(data);
                }
                else{
                    console.log('Log: Error while retrieving driver ID');
                    reject('Error while retrieving driver ID')
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }


>>>>>>> origin/master
}