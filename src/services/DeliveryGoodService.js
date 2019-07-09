import {HttpService} from './HttpService';

export class DeliveryGoodService {

    static baseURL() {return "http://localhost:3000/DeliveryGood" }
    //static baseURL() {return "http://ec2-3-16-129-205.us-east-2.compute.amazonaws.com:3000/route" }


    static createDeliveryGood(deliverygood) {
        return new Promise((resolve, reject) => {
            HttpService.post(DeliveryGoodService.baseURL(), deliverygood, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

}