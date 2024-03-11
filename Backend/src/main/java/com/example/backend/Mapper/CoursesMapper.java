package com.example.backend.Mapper;

import com.example.backend.DTO.CourseDTO;
import com.example.backend.Entity.Courses;


public class CoursesMapper {

     public static CourseDTO maptoCoursesDTO(Courses c){
        return new CourseDTO(
            c.getCourseId(),
            c.getCourseName(),
            c.getDescription(),
            c.getDuration(),
            c.getFees()
        );
    }
    public static Courses maptCourses(CourseDTO c){
        return new Courses(
            c.getCourseId(),
            c.getCourseName(),
            c.getDescription(),
            c.getDuration(),
            c.getFees()
        );
    }

}
