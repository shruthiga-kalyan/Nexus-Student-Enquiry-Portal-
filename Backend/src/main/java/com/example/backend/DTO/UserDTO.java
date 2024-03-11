package com.example.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class UserDTO {

    private Long userId;
    private   String userName;
    private  String userRole;
    private  String mobile;
    private  String email;
    private  String password;
}
