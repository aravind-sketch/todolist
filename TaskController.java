package com.todo.backend.model.controller;

import com.todo.backend.model.Task;
import com.todo.backend.model.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class TaskController {

    @Autowired
    private TaskRepository repo;

    @GetMapping
    public List<Task> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Task add(@RequestBody Task task) {
        return repo.save(task);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> update(@PathVariable Long id, @RequestBody Task data) {
        return repo.findById(id).map(task -> {
            task.setTitle(data.getTitle());
            task.setDescription(data.getDescription());
            task.setDueDate(data.getDueDate());
            task.setCompleted(data.isCompleted());
            return ResponseEntity.ok(repo.save(task));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
