import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-random1',
  templateUrl: './random1.component.html',
  styles: []
})
export class Random1Component implements OnInit {

  min: number;
  max: number;
  my_result: any;
  msg: number = 0;
  afisare = "";

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  callRandom(min, max){
    if (this.min > this.max){
      alert("Valoarea minima nu trebuie sa depaseasca valoarea maxima .");
    } else {
      this.msg = Math.floor(Math.random() * (max - min)) + min;
      this.afisare = '' + this.msg;
    }
  }

}
