package com.example.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Entity.Users;
import com.example.backend.Repo.UserRepo;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo userR;

    //get all users
    public List<Users> getAll(Users user)
    {
        return userR.findAll();
    }

    //get user by id
    public Users getById(int userid)
    {
        return userR.findById(userid).orElse(null);
    }

    //add users
		public Users add(Users user)
        {
            return userR.save(user);
        }

    //delete user by id
    public void deleteById(Users user)
    {
        userR.delete(user);
    }

		
		

}
