package com.example.backend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.Entity.Enquiry;

@Repository
public interface EnquiryRepo extends JpaRepository<Enquiry,Long>{

}
