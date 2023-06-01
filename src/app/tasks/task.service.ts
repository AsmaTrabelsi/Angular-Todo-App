import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewTask } from '../models/NewTask.dto';
import { Task } from '../models/task.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }
 private  tasks = new BehaviorSubject([
    new Task("task1")
  ]);
  private url =""

  getAllTasks(): Observable<Task[]>{
    return this.tasks;
  }

  addTask(newTask: NewTask){
    var updatedTaks = this.tasks.value.concat(new Task(newTask.title));
    this.tasks.next(updatedTaks);
  }

  removeTask(task : Task){
   var updatedTaks= this.tasks.value.filter(task => task != task);
    this.tasks.next(updatedTaks);

  }
}
