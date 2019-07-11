import {HttpService} from './HttpService';

export class PriceService {

    static baseURL() {return "http://localhost:3000/price" }
    //static baseURL() {return "http://ec2-3-16-129-205.us-east-2.compute.amazonaws.com:3000/route" }


    static createPriceCalculation(parameters) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${this.baseURL()}/`, parameters, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

}