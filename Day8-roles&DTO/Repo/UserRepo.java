package com.example.backend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.backend.Entity.Users;

@Repository
public interface UserRepo  extends JpaRepository<Users,Integer>{

}
