import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from "./todos/todo-list/todo-list.component";
import {EditTodoComponent} from "./todos/edit-todo/edit-todo.component";
import {NewTodoComponent} from "./todos/new-todo/new-todo.component";

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/new', component: NewTodoComponent },
  { path: 'todos/:todoId', component: EditTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
