package com.example.backend.Mapper;


import org.springframework.stereotype.Component;
import com.example.backend.DTO.UserDTO;
import com.example.backend.Entity.Users;

@Component
public class UsersMapper {
   
    public static UserDTO maptoUserDTO(Users u){
        return new UserDTO(u.getUserId(), u.getUserName(), u.getEmail(), u.getMobile(), u.getPassword(), u.getUserRole());
    }
    public static Users maptoUser(UserDTO u){
        return new Users(u.getUserId(), u.getUserName(), u.getEmail(), u.getMobile(), u.getPassword(), u.getUserRole());
    }
}

