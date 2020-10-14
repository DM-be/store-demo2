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

export class TodoEfects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadTodoAction>(TodoActionTypes.LOAD_TODO),
      mergeMap(() =>
        this.dataService.getTodos().pipe(
          map(todos => new LoadTodoSuccessAction(todos)),
          catchError(error => of(new LoadTodoFailureAction(error)))
        )
      )
    )
  );
}
