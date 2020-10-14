import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TodoComponent } from "./todo/todo.component";
import { TodoReducer } from "./store/todo.reducer";
import { TodoListComponent } from "./store/todo-list/todo-list.component";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./data.service";
import { TodoEfects } from "./store/todo.effects";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([TodoEfects]), // register our effects
    StoreModule.forRoot(
      {
        todoState: TodoReducer
      },
      {}
    ),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [AppComponent, TodoComponent, TodoListComponent],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
