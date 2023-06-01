package com.example.todolistapi.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.jetbrains.annotations.NotNull;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Task {
    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String title;
    @NotNull
    private LocalDate dueDate;
}
