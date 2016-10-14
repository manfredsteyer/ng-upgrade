import {FlightService} from "../services/flight.service";
import {Flight} from "../shared/flight";

// Add import
import { Component, OnInit, Input, Inject } from '@angular/core';

// Add Decorator and rename class, implement OnInit
@Component({
    selector: 'flight-edit',
    templateUrl: './migrated-flight-edit.component.html'
})
export class MigratedFlightEditComponent implements OnInit {
    info = "Flight Edit!";

    // Add Input() to id
    @Input() id: string;

    // Add a default value to prevent errors due to accessing an undefined variable
    // This is a workaround, but as the focus lies on other things here
    // let's stick with it.
    flight: Flight = <any>{};
    message: string;

    // Remove $stateParams from argument list
    // Move loading the flight to ngOnInit
    // Add @Inject('flightService')
    //constructor($stateParams: any, private flightService: FlightService)
    constructor(@Inject('flightService') private flightService: FlightService) {
    }

    ngOnInit() {
        // remove usage of $stateParams
        //this.id = $stateParams.id;

        this.flightService
            .getById(this.id)
            .then((flight: Flight) => {
                this.flight = flight;
                this.message = "";
            })
            .catch(resp => {
                console.error(resp);
                this.message = resp.data;
            })
    }

    save() {

        this.flightService
            .save(this.flight)
            .then((flight: Flight) => {
                this.flight = flight;
                this.message = "";
            })
            .catch(resp => {
                console.error(resp);
                this.message = resp.data;
            })
    }
}

