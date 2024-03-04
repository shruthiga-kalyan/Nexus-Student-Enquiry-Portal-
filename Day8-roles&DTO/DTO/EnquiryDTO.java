package com.example.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EnquiryDTO {

    private Integer enquiryID;
    private  Date enquiryDate;
    private String title;
    private String description;
    private String enquiryType;
}
