package com.example.backend.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="student")
public class Student {

//     studentId
//  studentName
//  studentEmailId 

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "student_id", nullable = false)
private int studentId;

 @Column(name = "student_name", nullable = false)
    private String studentName;


    @Column(name = "student_email", nullable = false)
    private String studentEmail;
}
