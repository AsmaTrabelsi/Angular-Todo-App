import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,tap, map } from 'rxjs';
import { NewTask } from '../models/NewTask.dto';
import { Task } from '../models/task.model';
import {HttpClient} from '@angular/common/http';
import * as internal from 'stream';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient : HttpClient,private datePipe: DatePipe) { }

 private  tasks = new BehaviorSubject<Task[]>([]);

  private url="http://localhost:9090/task/";

  getAllTasks(date: Date): Observable<Task[]>{
    const formattedDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    this.httpClient.get<Task[]>("http://localhost:9090/task/get/"+formattedDate)
    .pipe(map(TaskService.mapTask))
    .subscribe(t => this.tasks.next(t));
    return this.tasks;
  }

  private static mapTask(items: {id: number,title:string}[]){
    return items.map(item=> new Task(item.title,item.id));
  }
  addTask(newTask: NewTask){
    var updatedTaks = this.tasks.value.concat(new Task(newTask.title));
    const formattedDate = this.datePipe.transform(newTask.date, 'yyyy-MM-dd');
if (formattedDate !== null) {
  newTask.date = new Date(formattedDate);
}
    this.httpClient.post(this.url,newTask)
    .subscribe(()=> this.tasks.next(updatedTaks));
  }

  removeTask(task : Task){
   var updatedTaks= this.tasks.value.filter(task => task != task);
   this.httpClient.delete(this.url+"deleteTask/"+task.id)
   .subscribe(()=> this.tasks.next(updatedTaks));

  }
}
