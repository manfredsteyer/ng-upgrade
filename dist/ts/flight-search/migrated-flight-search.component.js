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
var core_1 = require('@angular/core');
var flight_service_1 = require('../services/flight.service');
// Add import for BookingEventService
var booking_event_service_1 = require("../services/booking-event.service");
var MigratedFlightSearchComponent = (function () {
    function MigratedFlightSearchComponent(
        // Add argument for bookingEventService
        bookingEventService, flightService) {
        this.bookingEventService = bookingEventService;
        this.flightService = flightService;
        this.from = "Hamburg";
        this.to = "Graz";
    }
    Object.defineProperty(MigratedFlightSearchComponent.prototype, "flights", {
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    MigratedFlightSearchComponent.prototype.search = function () {
        this.flightService.find(this.from, this.to);
    };
    MigratedFlightSearchComponent.prototype.select = function (flight) {
        this.selectedFlight = flight;
        // Call bookingEventService
        this.bookingEventService.publish(flight);
    };
    MigratedFlightSearchComponent = __decorate([
        core_1.Component({
            selector: 'migrated-flight-search',
            templateUrl: './migrated-flight-search.component.html'
        }),
        __param(0, core_1.Inject('bookingEventService')),
        __param(1, core_1.Inject('flightService')), 
        __metadata('design:paramtypes', [booking_event_service_1.BookingEventService, flight_service_1.FlightService])
    ], MigratedFlightSearchComponent);
    return MigratedFlightSearchComponent;
}());
exports.MigratedFlightSearchComponent = MigratedFlightSearchComponent;
//# sourceMappingURL=migrated-flight-search.component.js.map