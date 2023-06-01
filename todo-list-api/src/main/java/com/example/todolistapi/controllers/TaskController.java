package com.example.todolistapi.controllers;

import com.example.todolistapi.Repositories.TaskRepository;
import com.example.todolistapi.entities.Task;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@Tag(name = "Task Management")
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/todos")
public class TaskController {

    private final TaskRepository taskRepository;


    @GetMapping("/{date}")
    public List<Task> getAllTasksByDate(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return taskRepository.findByDueDate(date);
    }

    @PostMapping
    public void addTask(@RequestBody Task task) {
        taskRepository.save(task);
    }

    @PutMapping
    public void updateTask(@RequestBody Task task) {

        taskRepository.save(task);
    }


    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable int id) {
        taskRepository.deleteById(id);
    }
}
