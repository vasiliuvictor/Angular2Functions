import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";



@Injectable()
export class SharedService {

  constructor(private _http: Http) { }

  randomGenerator1(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

  }

}
