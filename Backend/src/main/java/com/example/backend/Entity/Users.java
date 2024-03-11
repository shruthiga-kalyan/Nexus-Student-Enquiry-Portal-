package com.example.backend.Entity;

import org.hibernate.annotations.DialectOverride.GeneratedColumns;

import jakarta.annotation.Generated;
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

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="users")
public class Users {

    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Long userId;
    
    @Column(name = "user_name", nullable = false)
    private String userName;
    
    @Column(name = "user_role", nullable = false)
    private String userRole;
    
    @Column(name = "mobile", nullable = false)
    private String mobile;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;


   

}
