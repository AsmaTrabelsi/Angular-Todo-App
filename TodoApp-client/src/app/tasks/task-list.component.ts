import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';
import { NewTask } from '../models/NewTask.dto';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService :TaskService) { }
  newTask: NewTask = new NewTask();
  tasks = this.taskService.getAllTasks(this.route.snapshot.params['date']);

  ngOnInit(): void {
    var strDate  = new Date(this.route.snapshot.params['date']);
    this.newTask = new NewTask(this.newTask.title,new Date(strDate));
  }



  remove(existingTask: Task){
   var userConfirmed : boolean =  confirm('Are you sure that you want to remove the following task ? \n '+existingTask.title);
  
  if(userConfirmed){
    this.taskService.removeTask(existingTask);
    }
  }
  add(taskNgForm : NgForm){
    if(taskNgForm.touched == false){
      return ;
    }
    if(taskNgForm.valid == false){
      return;
    }
    this.taskService.addTask(this.newTask);
      taskNgForm.reset({date: this.newTask.date}); // this.title=""
  }

}


