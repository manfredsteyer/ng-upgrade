"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Add imports
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
// Add Injectable
var FlightService = (function () {
    // Update constructor
    function FlightService(http, baseURL) {
        this.http = http;
        this.baseURL = baseURL;
        this.flights = [];
    }
    FlightService.prototype.save = function (flight) {
        var url = this.baseURL + "/api/flight";
        return this
            .http
            .post(url, flight)
            .then(function (resp) { return resp.data; });
    };
    FlightService.prototype.getById = function (id) {
        var url = this.baseURL + "/api/flight";
        var params = {
            id: id
        };
        return this
            .$http
            .get(url, { params: params })
            .then(function (resp) { return resp.data; });
    };
    FlightService.prototype.find = function (from, to) {
        var _this = this;
        var url = this.baseURL + "/api/flight";
        var params = {
            from: from,
            to: to
        };
        return this
            .$http
            .get(url, { params: params })
            .then(function (resp) { return resp.data; })
            .then(function (flights) {
            _this.flights = flights;
            return flights;
        });
    };
    FlightService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('baseUrl')), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], FlightService);
    return FlightService;
}());
exports.FlightService = FlightService;
//# sourceMappingURL=migrated-flight.service.js.map