export class HttpService {

    static apiURL() {
        if (true) {
            return "http://localhost:3000";
        } else {
            return "http://ec2-3-122-232-169.eu-central-1.compute.amazonaws.com:3000"
        }
    }

    static get(url, onSuccess, onError) {
        let token = window.localStorage['jwtToken'];
        let header = new Headers();
        if (token) {
            header.append('Authorization', token);
        }

        fetch(url, {
            method: 'GET',
            headers: header
        }).then((resp) => {
            if (this.checkIfUnauthorized(resp)) {
                delete window.localStorage['jwtToken'];
                window.location = "/login";
            } else {
                return resp.json();
            }
        }).then((resp) => {
            if (resp.error) {
                onError(resp.error);
            } else {
                if (resp.hasOwnProperty('token')) {
                    window.localStorage['jwtToken'] = resp.token;
                }
                onSuccess(resp);
            }
        }).catch((e) => {
            onError(e.message);
        });
    }

    static put(url, data, onSuccess, onError) {
        let token = window.localStorage['jwtToken'];
        let header = new Headers();
        if (token) {
            header.append('Authorization', token);
        }
        header.append('Content-Type', 'application/json');

        fetch(url, {
            method: 'PUT',
            headers: header,
            body: JSON.stringify(data)
        }).then((resp) => {
            if (this.checkIfUnauthorized(resp)) {
                delete window.localStorage['jwtToken'];
                window.location = "/login";
            } else {
                return resp.json();
            }
        }).then((resp) => {
            if (resp.error) {
                onError(resp.error);
            } else {
                if (resp.hasOwnProperty('token')) {
                    window.localStorage['jwtToken'] = resp.token;
                }
                onSuccess(resp);
            }
        }).catch((e) => {
            onError(e.message);
        });
    }

    static post(url, data, onSuccess, onError) {
        let token = window.localStorage['jwtToken'];
        let header = new Headers();
        if (token) {
            header.append('Authorization', token);
        }
        header.append('Content-Type', 'application/json');

        fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(data)
        }).then((resp) => {
            if (this.checkIfUnauthorized(resp)) {
                // window.location = "/#login";
                resp.error = resp.status;
                return resp;
            } else {
                return resp.json();
            }
        }).then((resp) => {
            if (resp.error) {
                onError(resp.error);
            } else {
                if (resp.hasOwnProperty('token')) {
                    window.localStorage['jwtToken'] = resp.token;
                }
                onSuccess(resp);
            }
        }).catch((e) => {
            onError(e.message);
        });
    }

    static remove(url, onSuccess, onError) {
        let token = window.localStorage['jwtToken'];
        let header = new Headers();
        if (token) {
            header.append('Authorization', token);
        }

        fetch(url, {
            method: 'DELETE',
            headers: header
        }).then((resp) => {
            if (this.checkIfUnauthorized(resp)) {
                delete window.localStorage['jwtToken'];
                window.location = "/login";
            } else {
                return resp.json();
            }
        }).then((resp) => {
            if (resp.error) {
                onError(resp.error);
            } else {
                onSuccess(resp)
            }
        }).catch((e) => {
            onError(e.message);
        });
    }

    static checkIfUnauthorized(res) {
        return res.status === 401;

    }

}