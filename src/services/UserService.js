import {HttpService} from "./HttpService";

export default class UserService {

    static baseURL() {return "http://localhost:3000/user" }

    static getDeliveriesByUserId(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${this.baseURL()}/${id}/goodstodeliver`, function (data) {
                if(data != undefined || Object.keys(data).length !== 0){
                    console.log("Data: " + JSON.stringify(data));
                    resolve(data);
                }
                else{
                    console.log('Log: Error while retrieving delivery goods');
                    reject('Error while retrieving delivery goods')
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }
}