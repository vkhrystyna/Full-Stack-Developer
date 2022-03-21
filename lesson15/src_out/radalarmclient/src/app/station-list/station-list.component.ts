import {Component, Input, OnInit} from '@angular/core';

import {Station} from "../../entities/station";
import {Observable} from "rxjs";

import {flyIn} from "./station-list.animations";
@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css'],
  animations: [flyIn]
})
export class StationListComponent implements OnInit {

  @Input() stations?: Station[];
  constructor() { }

  ngOnInit(): void {
  }

}
