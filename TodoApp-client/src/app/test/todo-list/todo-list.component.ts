import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: any[] = [];
  selectedDate: string ="";

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedDate = params['date'];
      this.fetchTodos();
    });
  }

  fetchTodos() {
    this.taskService.getTodosByDate(this.selectedDate).subscribe(
      (todos: Task[]) => {
        this.tasks = todos;
      },
      (error) => {
        console.error('Error retrieving todos:', error);
      }
    );
  }

}
