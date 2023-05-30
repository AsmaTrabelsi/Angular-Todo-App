import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tasks: Task[] = [
    new Task("task1")
  ]


  remove(existingTask: Task){
   var userConfirmed : boolean =  confirm('Are you sure that you want to remove the following task ? \n '+existingTask.title);
  
  if(userConfirmed){
    this.tasks = this.tasks.filter(task => task.title != task.title);
  }
  }
  add(newTask: string){
      this.tasks.push(new Task(newTask));
  }

}
