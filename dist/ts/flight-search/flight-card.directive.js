"use strict";
var FlightCardController = (function () {
    function FlightCardController() {
    }
    FlightCardController.prototype.select = function () {
        this.selectedItem = this.item;
    };
    return FlightCardController;
}());
exports.FlightCardComponent = {
    controller: FlightCardController,
    templateUrl: 'app/flight-search/flight-card.component.html',
    transclude: true,
    bindings: {
        item: '=',
        selectedItem: '='
    }
};
/*
export function createFlightCardDirective(): angular.IDirective {
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
    }
}
*/ 
//# sourceMappingURL=flight-card.directive.js.map