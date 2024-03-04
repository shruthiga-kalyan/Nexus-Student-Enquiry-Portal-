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

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="payment")
public class Payment {

//     Long paymentId;
//  String status; //paid=true/false
//  Double amountPaid;
//  Date paymentDate;
//  String modeOfPayment;

@Id
 @Column(name = "payment_id", nullable = false)
    private Long paymentId;


    @Column(name = "status", nullable = false)
    private Boolean status;

    @Column(name = "amount", nullable = false)
    private Double amount;

    @Column(name = "payment_date", nullable = false)
    private Date paymentDate;

    @Column(name = "payment_mode", nullable = false)
    private String paymentMode;




}
