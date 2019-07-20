import {HttpService} from './HttpService';

export class RouteService {

    static baseURL() {
        return HttpService.apiURL() + "/route";
    }


    static getRoutesByDate(date) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${this.baseURL()}/byDate/${date}`, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getRoutes() {
        return new Promise((resolve, reject) => {
            HttpService.get(`${this.baseURL()}/ofToday`, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getRoute(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${this.baseURL()}/${id}`, function (data) {
                if (data !== undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving route');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateRoute(route) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${route._id}`, route, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static sendDrivingStarts(routeId) {
        return new Promise(((resolve,reject) => {
            HttpService.get(`${this.baseURL()}/startDriving/${routeId}`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        }));
    }

    static sendDrivingStopped(routeId) {
        return new Promise(((resolve,reject) => {
            HttpService.get(`${this.baseURL()}/stopDriving/${routeId}`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        }));
    }
}