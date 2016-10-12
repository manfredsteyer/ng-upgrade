"use strict";
var angular = require('angular');
angular
    .module('flight-app')
    .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state('home', {
        url: '/home',
        template: '<home></home>'
    })
        .state('flightBooking', {
        abstract: true,
        url: '/flightBooking',
        template: '<flight-booking></flight-booking>'
    })
        .state('flightBooking.flightSearch', {
        url: '/flight',
        template: '<flight-search></flight-search>'
    })
        .state('flightBooking.passengerSearch', {
        url: '/passenger',
        template: '<passenger-search></passenger-search>'
    }).state('flightBooking.flightEdit', {
        url: '/flight/:id',
        template: '<flight-edit></flight-edit>'
    });
});
//# sourceMappingURL=app.routes.js.map