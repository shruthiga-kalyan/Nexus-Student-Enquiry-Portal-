package com.example.backend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.Entity.Courses;

@Repository
public interface CourseRepo extends JpaRepository<Courses,Long> {

}
