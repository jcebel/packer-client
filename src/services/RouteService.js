const HttpService = require('./HttpService');

class RouteService {

    static baseURL() {return "http://localhost:3000/route" }

    static getRoutes(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getRoute(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${this.baseURL()}/${id}`, function(data) {
                if(data !== undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving route');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateRoute(route) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${route._id}`, route, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

}

module.exports = RouteService;