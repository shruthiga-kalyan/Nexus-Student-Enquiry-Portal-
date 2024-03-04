package com.example.backend.Mapper;

import org.apache.catalina.User;

import com.example.backend.DTO.UserDTO;
import com.example.backend.Entity.Users;

public class UserMapper {

   
    public static UserDTO maptoUserDTO(Users user) {
        return new UserDTO(
            user.getUserId(),
            user.getUserName(),
            user.getUserRole(),
            user.getMobile(),
            user.getEmail(),
            user.getPassword());
    }

    public static Users maptoUser(UserDTO userdto) {
        return new Users(
               userdto.getUserId(),
               userdto.getUserName(),
               userdto.getUserRole(),
               userdto.getMobile(),
               userdto.getEmail(),
               userdto.getPassword());
    }

}

