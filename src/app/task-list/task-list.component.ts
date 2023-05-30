import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  date : Date = new Date();
  newTaskTitle : string="";

  ngOnInit(): void {
    this.date  = new Date(this.route.snapshot.params['date']);
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
  add(taskNgForm : NgForm){
    if(taskNgForm.touched == false){
      return ;
    }
    if(taskNgForm.valid == false){
      return;
    }
      this.tasks.push(new Task(this.newTaskTitle));
      taskNgForm.reset({date: this.date}); // this.title=""
  }

}


class NewTask{
  constructor(public title : string="", public date: Date= new Date()){

  }
}