import * as angular from 'angular';
import {FlightService} from "./services/flight.service";
import {createCityFilter} from "./fliters/city.filter";

// Remove import for createFlightCardDirective
// import {createFlightCardDirective} from "./flight-search/flight-card.directive";

// Add import for FlightCardComponent
import {FlightCardComponent} from "./flight-search/flight-card.component";


import {createCityValidatorDDO} from "./validation/city-validator";
import {createCityAsyncValidatorDDO} from "./validation/city-async-validator";
import {HomeComponent} from "./home/home.component";
import {PassengerSearchComponent} from "./passenger-search/passenger-search.component";
import {AppComponent} from "./app.component";
import {FlightEditComponent} from "./flight-edit/flight-edit.component";
import {FlightBookingComponent} from "./flight-booking/flight-booking.component";
import { OAuthService} from 'angular2-oauth2/oauth-service';
import tabs from './tabs/tabs';
import {BookingEventService} from "./services/booking-event.service";
import {ShoppingCardComponent} from "./shopping-card/shopping-card.component";

// Remove import for FlightSearchController
// import { FlightSearchController } from './flight-search/flight-search';

// Add import for FlightSearchComponent
import { FlightSearchComponent } from './flight-search/flight-search.component';

var app = angular.module('flight-app', ['ngMessages', 'ui.router', tabs]);

// Remove registration for FlightSearchController
// app.controller('FlightSearchController', FlightSearchController);

// Add registration for FlightSearchComponent
app.component('flightSearch', FlightSearchComponent);

app.service("flightService", FlightService);
app.service('bookingEventService', BookingEventService );
app.constant("baseURL", "http://www.angular.at")
app.filter("city", createCityFilter);
//app.component('flightCard', FlightCardComponent);

// Remove registration for the directive flightCard
// app.directive('flightCard', createFlightCardDirective);

// Add registration for the FlightCardComponent
app.component('flightCard', FlightCardComponent);

app.directive('city', createCityValidatorDDO);
app.directive('cityAsync', createCityAsyncValidatorDDO);
app.component('home', HomeComponent);
app.component('passengerSearch', PassengerSearchComponent);
app.component('app', AppComponent);
app.component('flightEdit', FlightEditComponent);
app.component('flightBooking', FlightBookingComponent);
app.service('oauthService', OAuthService);
app.component('shoppingCard', ShoppingCardComponent);

