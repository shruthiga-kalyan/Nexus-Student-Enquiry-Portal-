package com.example.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.DTO.EnquiryDTO;
import com.example.backend.Entity.Enquiry;
import com.example.backend.Service.EnquiryServices;
import java.util.List;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/enquiry")
public class EnquiryController {

    @Autowired
    private  EnquiryServices enquiryS;

    public EnquiryController(EnquiryServices enquiryS){
        this.enquiryS=enquiryS;
    }

    //add enquiry 
    @PostMapping("/addEnquiry")
    @PreAuthorize("hasAuthority('ROLE_STUDENT')")
    public ResponseEntity<Enquiry> addEnquiry(@RequestBody Enquiry eq) {
        Enquiry c=enquiryS.addEnquiry(eq);
        return new ResponseEntity<>(c, HttpStatus.CREATED);
    }
    
    @PutMapping("/replyEnquiry")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Enquiry> replyEnquiry(@RequestBody Enquiry eq) {
        Enquiry c=enquiryS.postEnquiry(eq);
        return new ResponseEntity<>(c, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Enquiry>> getEnquiries(){
        List<Enquiry> ans=enquiryS.getAllEnquiries();
        return new ResponseEntity<>(ans,HttpStatus.CREATED);
    }

}
