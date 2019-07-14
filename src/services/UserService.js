import {HttpService} from "./HttpService";

export class UserService {

    static baseURL() {return HttpService.apiURL() + "/user"; }

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
}