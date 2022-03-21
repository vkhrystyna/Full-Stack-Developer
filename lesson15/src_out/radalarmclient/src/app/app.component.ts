import { Component } from '@angular/core';
import {StationService} from "../services/station.service";
import {Station} from "../entities/station";
import {from, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'radalarmclient';
  stations: Station[] = [];


  constructor(private stationService:StationService ){ }

  ngOnInit(): void {

    this.stationService.getStations().subscribe(st => {
      this.stations = st;
    })
  }

}
