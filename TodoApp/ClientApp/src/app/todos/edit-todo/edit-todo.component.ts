import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Todo} from "../todo.model";
import {TodosService} from "../todos.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  private todo: Todo | undefined;

  todoForm = this.fb.group({
    description: ['', Validators.required],
    done: [false]
  });

  constructor(private route: ActivatedRoute, private todoService: TodosService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((r) => {
      const idS = r.get("todoId");
      if (idS !== null) {
        this.todoService.get(+idS).subscribe(t => {
          this.todo = t;
          this.todoForm.setValue({
            description: this.todo.description,
            done: this.todo.done
          });
        });
      }
    });
  }
  onSubmit() {
    if (this.todo !== undefined) {
      this.todo.description = this.todoForm.value.description;
      this.todo.done = this.todoForm.value.done;

      this.todoService.update(this.todo).subscribe((t) => {
        this.router.navigate(['todos'])
      })
    }

  }
}
