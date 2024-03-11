package com.example.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.Entity.Users;
import com.example.backend.Repo.UserRepo;

import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
@Service
public class UserService {

    @Autowired
    private UserRepo userR;
    private PasswordEncoder passwordEncoder;

    //get all users
    public List<Users> getAll(Users user)
    {
        return userR.findAll();
    }

    //get user by id
    public Users getById(long userid)
    {
        return userR.findById(userid).orElse(null);
    }

    //add users
		public Users add(Users user)
        {
            return userR.save(user);
        }

    //delete user by id
    public void deleteById(long id)
    {
        userR.deleteById(id);
    }

        //put 
        public void update(Users user,long  id)
        {
            userR.saveAndFlush(user);
        }
		

        
    
	public ResponseEntity<?> registerNewUser(Users user) {
		String email = user.getEmail();

		Users existingUserEmail = userR.findByEmail(email).orElse(null);


		if (existingUserEmail != null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("User already exists with this email or username");
		}
        user.setUserRole(user.getUserRole());
		
		user.setPassword(getEncodedPassword(user.getPassword()));
		user.setMobile(user.getMobile());
		Users savedUser = userR.save(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
	}
    public String getEncodedPassword(String password) {
		return passwordEncoder.encode(password);
	}
		

}
