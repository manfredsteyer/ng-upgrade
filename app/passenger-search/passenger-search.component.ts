import * as angular from 'angular';

class PassengerSearchController {
    info = "PassengerSearch";
}

export let PassengerSearchComponent: angular.IComponentOptions = {
    controller: PassengerSearchController,
    template: require('./passenger-search.component.html')
}