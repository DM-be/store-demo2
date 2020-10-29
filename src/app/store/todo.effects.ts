import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { DataService } from "../data.service";
import {
  LoadTodoAction,
  LoadTodoFailureAction,
  LoadTodoSuccessAction,
  TodoActionTypes
} from "./todo.action";

@Injectable()
export class TodoEfects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  // create a new effect
  // use the actions stream and add a new action to the end of the stream, depending on the result of the dataservice
  // https://www.learnrxjs.io/learn-rxjs/operators/error_handling/catch
  //
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadTodoAction>(TodoActionTypes.LOAD_TODO),
      mergeMap(() =>
        this.dataService
          .getTodos()
          .pipe(
            map(
              todos => new LoadTodoSuccessAction(todos),
              catchError(error => of(new LoadTodoFailureAction(error)))
            )
          )
      )
    )
  );
}
