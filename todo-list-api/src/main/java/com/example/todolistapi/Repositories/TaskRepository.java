package com.example.todolistapi.Repositories;

import com.example.todolistapi.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task,Integer> {
    List<Task> findByDueDate(LocalDate dueDate);
}
