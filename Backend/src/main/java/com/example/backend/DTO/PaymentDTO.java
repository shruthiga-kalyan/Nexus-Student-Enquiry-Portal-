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
public class PaymentDTO {

   private Long paymentId;
   private  Boolean status; //paid=true/false
   private  Double amount;
   private  Date paymentDate;
   private String paymentMode;
    

}
