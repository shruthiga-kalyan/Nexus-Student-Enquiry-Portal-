package com.example.backend.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Entity.Users;
import com.example.backend.Service.UserService;

// import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userS;

//get all users
@GetMapping("/getUsers")
	public List<Users> get(Users user)
	{
		List<Users> list= new ArrayList<>();
		list=userS.getAll(user);
		return list;
		
	}

//get user by id
@GetMapping("/getUserById/{userid}")
	public Users getById(@PathVariable int userid)
	{
		return userS.getById(userid);
	}

    //post 
	@PostMapping("/addUsers")
	public void addUsers(@RequestBody Users user)
	{
		userS.add(user);
		System.out.print("user added!");
	}

	//delete user by id
	@DeleteMapping("/deleteUserById/{id}")
	public void deleteById(@PathVariable int id)
	{
		userS.deleteById(id);
	}

    //update user by id 
	@PutMapping("/updateById/{id}")
	public void  updateById(@PathVariable int id,@RequestBody Users user) {
		
		userS.update(user,id);
	}
	


}

