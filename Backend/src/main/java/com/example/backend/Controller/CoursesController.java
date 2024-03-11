package com.example.backend.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Entity.Courses;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;
import com.example.backend.Entity.Courses;
import com.example.backend.Service.CoursesService;


@RestController
@RequestMapping("/api/courses")
public class CoursesController {
    @Autowired
private CoursesService courseS;

//get all users
@GetMapping("/getCourses")
	public List<Courses> get(Courses course)
	{
		List<Courses> list= new ArrayList<>();
		list=courseS.getAll(course);
		return list;
		
	}

//get user by id
// @GetMapping("/getUserById/{courseid}")
// 	public Courses getById(@PathVariable int courseid)
// 	{
// 		return courseS.getById(courseid);
// 	}

    //post 
	@PostMapping("/addCourses")
	public void addCourses(@RequestBody Courses user)
	{
		courseS.add(user);
		System.out.print("user added!");
	}

	//delete user by id
	@GetMapping("/deleteUserById")
	public void deleteById(@RequestBody Courses course)
	{
		courseS.deleteById(course);
	}

    //update user by id 
	@PostMapping("/updateById/{id}")
	public void  updateById(@PathVariable int id,@RequestBody Courses course) {
		
		courseS.update(course,id);
	}
}
