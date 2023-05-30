package com.example.todolistapi.Repositories;

import com.example.todolistapi.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task,Integer> {
}
