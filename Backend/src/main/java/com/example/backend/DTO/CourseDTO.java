package com.example.backend.DTO;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CourseDTO {
  private Long courseId;
    private String courseName;
    private String description;
    private String duration;
    private Integer fees;
    
}
