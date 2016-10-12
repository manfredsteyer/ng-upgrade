"use strict";
var FlightCardController = (function () {
    function FlightCardController() {
    }
    FlightCardController.prototype.select = function () {
        this.selectedItem = this.item;
    };
    return FlightCardController;
}());
function createFlightCardDirective() {
    return {
        controller: FlightCardController,
        templateUrl: 'app/flight-search/flight-card.component.html',
        transclude: true,
        bindToController: true,
        controllerAs: '$ctrl',
        scope: {
            item: '=',
            selectedItem: '='
        }
    };
}
exports.createFlightCardDirective = createFlightCardDirective;
exports.FlightCardComponent = {
    controller: FlightCardController,
    templateUrl: 'app/flight-search/flight-card.component.html',
    transclude: true,
    bindings: {
        item: '<',
        selectedItem: '='
    }
};
//# sourceMappingURL=flight-card.component.js.map