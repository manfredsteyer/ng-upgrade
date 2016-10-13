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
var angular = require('angular');
var flight_service_1 = require("./services/flight.service");
var city_filter_1 = require("./fliters/city.filter");
// Remove import for createFlightCardDirective
// import {createFlightCardDirective} from "./flight-search/flight-card.directive";
// Add import for FlightCardComponent
var flight_card_component_1 = require("./flight-search/flight-card.component");
var city_validator_1 = require("./validation/city-validator");
var city_async_validator_1 = require("./validation/city-async-validator");
var home_component_1 = require("./home/home.component");
var passenger_search_component_1 = require("./passenger-search/passenger-search.component");
var app_component_1 = require("./app.component");
var flight_edit_component_1 = require("./flight-edit/flight-edit.component");
var flight_booking_component_1 = require("./flight-booking/flight-booking.component");
var oauth_service_1 = require('angular2-oauth2/oauth-service');
var tabs_1 = require('./tabs/tabs');
var booking_event_service_1 = require("./services/booking-event.service");
var shopping_card_component_1 = require("./shopping-card/shopping-card.component");
// Remove import for FlightSearchController
// import { FlightSearchController } from './flight-search/flight-search';
// Add import for FlightSearchComponent
var flight_search_component_1 = require('./flight-search/flight-search.component');
// Add import for UpgradeAdapter
var upgrade_1 = require('@angular/upgrade');
// Add imports for dependencies from @angular/core
var core_1 = require('@angular/core');
// Add imports for Angular 2 modules
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
// Add import for MigratedFlightSearchComponent
var migrated_flight_search_component_1 = require("./flight-search/migrated-flight-search.component");
var passenger_card_component_1 = require("./passenger-search/passenger-card.component");
var passenger_service_1 = require("./services/passenger.service");
var app = angular.module('flight-app', ['ngMessages', 'ui.router', tabs_1.default]);
// Remove registration for FlightSearchController
// app.controller('FlightSearchController', FlightSearchController);
// Add registration for FlightSearchComponent
app.component('flightSearch', flight_search_component_1.FlightSearchComponent);
app.service("flightService", flight_service_1.FlightService);
app.service('bookingEventService', booking_event_service_1.BookingEventService);
app.constant("baseURL", "http://www.angular.at");
app.filter("city", city_filter_1.createCityFilter);
//app.component('flightCard', FlightCardComponent);
// Remove registration for the directive flightCard
// app.directive('flightCard', createFlightCardDirective);
// Add registration for the FlightCardComponent
app.component('flightCard', flight_card_component_1.FlightCardComponent);
app.directive('city', city_validator_1.createCityValidatorDDO);
app.directive('cityAsync', city_async_validator_1.createCityAsyncValidatorDDO);
app.component('home', home_component_1.HomeComponent);
app.component('app', app_component_1.AppComponent);
app.component('flightEdit', flight_edit_component_1.FlightEditComponent);
app.component('flightBooking', flight_booking_component_1.FlightBookingComponent);
app.service('oauthService', oauth_service_1.OAuthService);
app.component('shoppingCard', shopping_card_component_1.ShoppingCardComponent);
app.component('passengerCard', passenger_card_component_1.PassengerCardComponent);
app.component('passengerSearch', passenger_search_component_1.PassengerSearchComponent);
app.service('passengerService', passenger_service_1.PassengerService);
// Create UpgradeAdapter
exports.upgradeAdapter = new upgrade_1.UpgradeAdapter(core_1.forwardRef(function () { return AppModule; }));
// Add MigratedAppModule
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            declarations: [
                migrated_flight_search_component_1.MigratedFlightSearchComponent,
                exports.upgradeAdapter.upgradeNg1Component('flightCard')
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
// Add Upgrade for flightService
exports.upgradeAdapter.upgradeNg1Provider('flightService');
// Downgrade DemoCmp
app.directive('migratedFlightSearch', exports.upgradeAdapter.downgradeNg2Component(migrated_flight_search_component_1.MigratedFlightSearchComponent));
//# sourceMappingURL=app.module.js.map