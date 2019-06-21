const RouteService = require('../src/services/RouteService');

const executeTest = function() {
    //RouteService Test
    RouteService.getRoutes().then((data) => {
        console.log("Get route list");
        console.log(data);
    }).catch((e) => {
        console.error(e);
    });
}

executeTest()

