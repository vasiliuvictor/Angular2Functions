import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
  styles: []
})
export class LinearComponent implements OnInit {

  a:number;
  b:number;
  m = 65535; // Big integer 2^16
  n = Math.random();

  afisare = "";

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  callRandom() {
    this.a = Math.random();
    this.b = Math.random();
    this.n = ((this.a * this.a)+ this.b)% (this.m);
    this.afisare = '' + this.n;
  }

}
