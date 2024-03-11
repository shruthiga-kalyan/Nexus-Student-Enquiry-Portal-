package com.example.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Entity.Enquiry;
// import com.example.backend.DTO.EnquiryDTO;
import com.example.backend.Repo.EnquiryRepo;
import java.util.List;

@Service
public class EnquiryServices {

  @Autowired
  private EnquiryRepo enquiryR;

  //add
  public Enquiry addEnquiry(Enquiry eq) {
    return enquiryR.save(eq);
  }

  //post reply 
    public Enquiry postEnquiry(Enquiry eq) {
        return enquiryR.saveAndFlush(eq);
    }

    //get all enquirie
    public List<Enquiry> getAllEnquiries() {
        return enquiryR.findAll();
    }   




}
