package com.example.todolistapi.controllers;

import com.example.todolistapi.Repositories.TaskRepository;
import com.example.todolistapi.entities.Task;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Task Management")
@RestController
@RequiredArgsConstructor
@RequestMapping("task")
public class TaskController {

    private final TaskRepository taskRepository;

    @GetMapping
    public List<Task> getAllEvents() {
        return taskRepository.findAll();
    }

    @GetMapping("/{id}")
    public Task getEventById(@PathVariable int id) {
        return taskRepository.findById(id).orElse(null);
    }

    @PostMapping
    public void addEvent(@RequestBody Task task) {
        taskRepository.save(task);
    }

    @PutMapping
    public void updateEvent(@RequestBody Task task) {

        taskRepository.save(task);
    }


    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable int id) {
        taskRepository.deleteById(id);
    }
}
