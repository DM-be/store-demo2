import { Action } from "@ngrx/store";


export enum TodoActionTypes  {
  ADD_TODO = '[TODO] add todo',
  COMPLETE_TODO = '[TODO] completed todo',
  DELETE_TODO = '[TODO] delete todo' 
}

export class AddTodoAction implements Action {
  readonly type = TodoActionTypes.ADD_TODO;
  constructor(public payload: string) {}
}

export class CompleteTodoAction implements Action {
  readonly type = TodoActionTypes.COMPLETE_TODO
  constructor(public payload: string) {}
}

export class DeleteTodoAction implements Action {
  readonly type = TodoActionTypes.DELETE_TODO
  constructor(public payload: string) {}
}


export type TodoAction = AddTodoAction | CompleteTodoAction | DeleteTodoAction