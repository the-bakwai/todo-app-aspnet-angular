import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo.model";
import {map, tap} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  readonly todosUrl = '/api/v1/todos';

  constructor(private httpclient: HttpClient) {
  }

  getAll() {
    return this.httpclient.get<Todo[]>(this.todosUrl);
  }

  get(id: number): Observable<Todo> {
    return this.httpclient.get<Todo>(`${this.todosUrl}/${id}`).pipe(tap(console.log));
  }

  create(todo: Todo): Observable<Todo> {
    return this.httpclient.post<Todo>(this.todosUrl, todo);
  }

  update(todo: Todo): Observable<any> {
    return this.httpclient.patch(`${this.todosUrl}/${todo.id}`, todo);
  }

  delete(id: number): Observable<any> {
    return this.httpclient.delete(`${this.todosUrl}/${id}`);
  }
}
