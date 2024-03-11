package com.example.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Entity.Courses;
// import com.example.backend.Entity.Users;
import com.example.backend.Repo.CourseRepo;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class CoursesService {

    @Autowired
    private CourseRepo coursesR;

    //get all users
    public List<Courses> getAll(Courses course)
    {
        return coursesR.findAll();
    }


    //add users
		public Courses add(Courses course)
        {
            return coursesR.save(course);
        }

    //delete user by id
    public void deleteById(Courses course)
    {
        coursesR.delete(course);
    }

        //put 
        public void update(Courses course,int  id)
        {
            coursesR.saveAndFlush(course);
        }

        

}
