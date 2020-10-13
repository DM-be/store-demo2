import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoComponent } from './todo/todo.component';
import { TodoReducer } from "./store/todo.reducer";
import { TodoListComponent } from './store/todo-list/todo-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(
      {
        todoState: TodoReducer
      },
      {}
    ),
     StoreDevtoolsModule.instrument(),
  ],
  declarations: [AppComponent, TodoComponent, TodoListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
