"use strict";
var FlightSearchController = (function () {
    function FlightSearchController(flightService, bookingEventService) {
        this.from = 'Hamburg';
        this.to = 'Graz';
        this.selectedFlight = null;
        this.flightService = flightService;
        this.bookingEventService = bookingEventService;
    }
    FlightSearchController.prototype.getFlights = function () {
        return this.flightService.flights;
    };
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
exports.FlightSearchComponent = {
    controller: FlightSearchController,
    template: 'app/flight-search/flight-search.html'
};
//# sourceMappingURL=flight-search.js.map