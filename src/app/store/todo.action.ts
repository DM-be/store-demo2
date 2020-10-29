import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { Todo } from "./models/todo";

export enum TodoActionTypes {
  ADD_TODO = "[TODO] add todo",
  COMPLETE_TODO = "[TODO] completed todo",
  DELETE_TODO = "[TODO] delete todo",
  // these are new
  LOAD_TODO = "[TODO] load todos",
  LOAD_TODO_SUCCESS = "[TODO] load todos sucess",
  LOAD_TODO_FAILURE = "[TODO] load todos failure"
}

export class LoadTodoAction implements Action {
  readonly type = TodoActionTypes.LOAD_TODO;
}

export class LoadTodoSuccessAction implements Action {
  readonly type = TodoActionTypes.LOAD_TODO_SUCCESS;
  constructor(public payload: Todo[]) {}
}

export class LoadTodoFailureAction implements Action {
  readonly type = TodoActionTypes.LOAD_TODO_FAILURE;
  constructor(public payload: HttpErrorResponse) {}
}

export class AddTodoAction implements Action {
  readonly type = TodoActionTypes.ADD_TODO;
  constructor(public payload: string) {}
}

export class CompleteTodoAction implements Action {
  readonly type = TodoActionTypes.COMPLETE_TODO;
  constructor(public payload: string) {}
}

export class DeleteTodoAction implements Action {
  readonly type = TodoActionTypes.DELETE_TODO;
  constructor(public payload: string) {}
}

export type TodoAction =
  | AddTodoAction
  | CompleteTodoAction
  | DeleteTodoAction
  | LoadTodoAction
  | LoadTodoFailureAction
  | LoadTodoSuccessAction;
