import {HttpService} from "./HttpService";

export class DeliveryGoodService{

    static baseURL() {return "http://localhost:3000/deliverygoods" }

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
