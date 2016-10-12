"use strict";
var FlightSearchController = (function () {
    function FlightSearchController(flightService, bookingEventService) {
        this.flightService = flightService;
        this.bookingEventService = bookingEventService;
        this.from = 'Hamburg';
        this.to = 'Graz';
        this.info = "Hallo Welt!";
    }
    Object.defineProperty(FlightSearchController.prototype, "flights", {
        // flights: Array<Flight> = [];
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchController.prototype.search = function () {
        return this
            .flightService
            .find(this.from, this.to)
            .catch(function (resp) {
            console.debug(resp);
        });
    };
    FlightSearchController.prototype.select = function (f) {
        this.selectedFlight = f;
        this.bookingEventService.publish(f);
    };
    return FlightSearchController;
}());
exports.FlightSearchController = FlightSearchController;
//# sourceMappingURL=flight-search.1C.js.map