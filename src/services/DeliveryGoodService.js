import {HttpService} from "./HttpService";

export class DeliveryGoodService{

    static baseURL() {return "http://localhost:3000/deliverygoods" }

    static getDeliveryGood(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${this.baseURL()}/${id}`, function(data) {
                if(data !== undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving Delivery Good');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getDeliveryState(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${this.baseURL()}/${id}/deliverystate`, function(data) {
                if(data !== undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving Delivery Good');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static deleteDeliveryGood(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${this.baseURL()}/${id}`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}