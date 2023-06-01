import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
  })
  export class TaskService {
    private apiUrl = 'http://localhost:9090/api/todos/'; 
  
    constructor(private http: HttpClient) {}
  
    getTodosByDate(date: string): Observable<Task[]> {
      return this.http.get<Task[]>(this.apiUrl+date);
    }
  
    createTodo(task: Task): Observable<Task> {
      return this.http.post<Task>(this.apiUrl, task);
    }
  
    updateTodo(task: Task): Observable<Task> {
      return this.http.put<Task>(this.apiUrl, task);
    }
  
    deleteTodo(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
  }
