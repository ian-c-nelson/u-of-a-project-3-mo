
// GIPHY controller
// API Dashboard - https://developers.giphy.com/dashboard/
// This will probably be used in multiple projects in the future. Current key is for kaiju-rps-multiplayer.
// If Axios is available use it, fall back to jQuery
class NhtsaController {
  
}

// Define the prototype functions 

// GET functions ==================================================

// function to call GIPHY API using Axios or jQuery
NhtsaController.prototype._executeGet = function (url, doneCallback, failCallback) {
    if (!this.apiKey || typeof this.apiKey !== "string") {
        console.log("A GIPHY API Key is required for all calls..")
        return;
    }

    if (!url || typeof url !== "string") {
        console.log("A url is required for all calls.")
        return;
    }

  
    if (!doneCallback || typeof doneCallback !== "function") {
        console.log("A call back function is required for all calls.")
        return;
    }

    if (window.axios !== undefined) {
        window.axios.get(url)
            .then(doneCallback)
            .catch(failCallback);
    } else if (window.jQuery !== undefined) {
        window.jQuery.get(url)
            .done(doneCallback)
            .fail(failCallback);
    } else {
        console.log("Axios or jQuery required in order to make AJAX calls.")
    }
};

NhtsaController.prototype._getFromNhtsa = function (endPoint, doneCallback, failCallback) {
    var url = "https://vpic.nhtsa.dot.gov/api" + endPoint + "?format=json";
    this._executeGet(url, doneCallback, failCallback);
}
// Single ID
NhtsaController.prototype.getCarByVin = function (vin, doneCallback, failCallback) {
    var endPoint = "/vehicles/decodevinvalues/" + vin ;
    this._getFromNhtsa(endPoint, doneCallback, failCallback);
};


// End GET functions ==================================================

// POST functions =================================================
// TODO: add upload function.
// End POST functions =================================================

module.exports = NhtsaController;