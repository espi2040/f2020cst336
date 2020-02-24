/*global $*/
var amount1;
var amount2;
var totalAmount;
/* global number*/
$(document).ready(function() {
    $("button").on("click", filledin);
    //functions
    
     function filledin() {
        $("#validate").html(""); //reset validation feedback
        if (!valid1()) {
            return
            
        }
        if (!valid2()) {
            return
    
        }
        //get amounts
        let q1Response = $("#item1").val();
        let q2Response = $("#item2").val();
        
        // prices for items
        let price1 = 1;
        let price2 = 5;
        
        //calculate amount
        amount1 = price1 * q1Response;
        amount2 = price2 * q2Response;
        //calculate taxez
        let taxes = (amount1+amount2)*.08;
        totalAmount = (amount1 + amount2) + taxes;
        
        
        //display amount for each item 
        $("#total1").html(`Total: $ ${amount1}`);
        $("#total2").html(`Total: $ ${amount2}`);
        $("#p1").html(`Taxes: $ ${taxes} Total Amount: $ ${totalAmount}`);
        
    }
    
    function valid1() {
        let isValid = true;
        if ($("#item1").val() == "") {
            isValid = false;
            $("#validate").html("amount 1 was not answered");
        }
        return isValid;
    }  
    
    function valid2() {
        let isValid = true;
        if ($("#item2").val() == "") {
            isValid = false;
            $("#validate").html("amount 2 was not answered");
            
        } 
        return isValid;
        
    }
   
    
});//click