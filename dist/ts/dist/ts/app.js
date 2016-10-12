"use strict";
var angular = require('angular');
var flight_service_1 = require("./services/flight.service");
var city_filter_1 = require("./fliters/city.filter");
var flight_card_component_1 = require("./flight-search/flight-card.component");
var city_validator_1 = require("./validation/city-validator");
var city_validator2_1 = require("./validation/city-validator2");
var city_async_validator_1 = require("./validation/city-async-validator");
//import {flightSearchComponentDesc} from "./flight-search/flight-search.component";
var home_component_1 = require("./home/home.component");
var passenger_search_component_1 = require("./passenger-search/passenger-search.component");
var app_component_1 = require("./app.component");
var flight_edit_component_1 = require("./flight-edit/flight-edit.component");
var flight_booking_component_1 = require("./flight-booking/flight-booking.component");
var oauth_service_1 = require('angular2-oauth2/oauth-service');
var tabs_1 = require('./tabs/tabs');
var booking_event_service_1 = require("./services/booking-event.service");
var shopping_card_component_1 = require("./shopping-card/shopping-card.component");
// !! Import flight-search
require('./flight-search/flight-search');
var app = angular.module('flight-app', ['ngMessages', 'ui.router', tabs_1.default]);
app.service("flightService", flight_service_1.FlightService);
app.service('bookingEventService', booking_event_service_1.BookingEventService);
app.constant("baseURL", "http://www.angular.at");
app.filter("city", city_filter_1.createCityFilter);
app.component('flightCard', flight_card_component_1.flightCardCompDesc);
app.directive('city', city_validator_1.createCityValidatorDDO);
app.directive('city2', city_validator2_1.createCityValidator2DDO);
app.directive('cityAsync', city_async_validator_1.createCityAsyncValidatorDDO);
//app.component('flightSearch', flightSearchComponentDesc);
app.component('home', home_component_1.homeComponentDesc);
app.component('passengerSearch', passenger_search_component_1.passengerSearchComponentDesc);
app.component('app', app_component_1.appComponentDesc);
app.component('flightEdit', flight_edit_component_1.flightEditComponentDesc);
app.component('flightBooking', flight_booking_component_1.flightBookingComponentDesc);
app.service('oauthService', oauth_service_1.OAuthService);
app.component('shoppingCard', shopping_card_component_1.shoppingCardComponentDesc);
app.config(function ($stateProvider, $urlRouterProvider) {
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
        controller: FlightSearchController
    })
        .state('flightBooking.passengerSearch', {
        url: '/passenger',
        template: '<passenger-search></passenger-search>'
    }).state('flightBooking.flightEdit', {
        url: '/flight/:id',
        template: '<flight-edit></flight-edit>'
    });
});
//# sourceMappingURL=app.js.map 
//# sourceMappingURL=app.js.map