import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TodosService} from "../todos.service";
import {Todo} from "../todo.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  todoForm = this.fb.group({
    description: ['', Validators.required],
    done: [false]
  });

  constructor(private fb: FormBuilder, private todoService: TodosService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {description: this.todoForm.value.description, done: this.todoForm.value.done} as Todo;
    this.todoService.create(todo).subscribe((a) => {
      this.router.navigate(['todos']);
    });
  }
}
