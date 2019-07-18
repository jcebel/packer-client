import {HttpService} from "./HttpService";

export class DeliveryGoodService{

    static baseURL() {return HttpService.apiURL() + "/deliverygoods"; }

    static getDeliveryGoods(){
        return new Promise((resolve, reject) => {
            HttpService.get(`${this.baseURL()}/`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

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

    static getDeliveryStatus(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${this.baseURL()}/${id}/deliverystatus`, function(data) {
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
    static createDeliveryGood(deliveryGood) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${this.baseURL()}`, deliveryGood, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

}
