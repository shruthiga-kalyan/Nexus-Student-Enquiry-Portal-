package com.example.backend.Entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "enquiry_info")
public class Enquiry {


//     Integer enquiryID
//  DateTime enquiryDate
//  String title
//  String description
//  String enquiryType
    @Id
    @Column(name = "enquiry_id", nullable = false)
    private Integer enquiryID;

    @Column(name = "enquiry_date", nullable = false)
    private Date enquiryDate;


    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "enquiry_type", nullable = false)
    private String enquiryType;




}
