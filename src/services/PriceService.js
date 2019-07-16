import {HttpService} from './HttpService';

export class PriceService {

    static baseURL() {return HttpService.apiURL() + "/price"; }

    static createPriceCalculation(parameters) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${this.baseURL()}`, parameters, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

}