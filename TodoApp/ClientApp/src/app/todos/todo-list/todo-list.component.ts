import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodosService} from "../todos.service";
import {Todo} from "../todo.model";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todos: Todo[] = [];

  constructor(private todoService: TodosService) {
    this.todoService.getAll().subscribe(ts => {
      this.todos = ts;
    });

  }

  ngOnInit(): void {

  }

  toggleDone(id: number) {

  }

  delete(id: number) {

  }

  ngOnDestroy(): void {
  }
}
