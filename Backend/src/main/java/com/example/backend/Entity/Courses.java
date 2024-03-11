package com.example.backend.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="courses")
public class Courses {

    @Id
    @Column(name="course_id" , nullable = false)
    private Long courseId;
    
    @Column(name = "course_name", nullable = false)
    private String courseName;
    
    @Column(name = "description", nullable = false)
    private String description;
    
    @Column(name = "duration", nullable = false)
    private String duration;
    
    @Column(name = "fees", nullable = false)
    private Integer fees;
   

}

