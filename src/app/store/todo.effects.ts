import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { DataService } from "../data.service";

@Injectable()
export class TodoEfects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  // create a new effect
  // use the actions stream and add a new action to the end of the stream, depending on the result of the dataservice
  // https://www.learnrxjs.io/learn-rxjs/operators/error_handling/catch
  //
}
