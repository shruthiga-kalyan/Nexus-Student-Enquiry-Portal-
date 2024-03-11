package com.example.backend.Mapper;
import com.example.backend.Entity.*;
import com.example.backend.Repo.*;
import org.springframework.beans.factory.annotation.Autowired;  

import org.springframework.stereotype.Component;

import com.example.backend.DTO.*;


@Component 
public class EnquiryMapper {
    private static UserRepo ur;
    @Autowired
    public EnquiryMapper(UserRepo ur){
        this.ur=ur;
    }
    public static EnquiryDTO maptoEnquiryDTO(Enquiry e){
        return new EnquiryDTO(e.getId(), e.getEnqDate(), e.getReplyDate(), e.getEnqDesc(), e.getEnqReply(), e.getEnqStatus(), e.getUser().getUserId());
    }
    public static Enquiry maptoEnquiry(EnquiryDTO e){
        return new Enquiry(e.getId(), e.getEnqDate(), e.getReplyDate(), e.getEnqDesc(), e.getEnqReply(), e.getEnqStatus(), ur.findById(e.getUserid()).orElse(null));
    }
}
