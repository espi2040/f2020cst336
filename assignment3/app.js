let search = function() {
	
	
	$("#used").empty();
	
	$("#gender").empty();
	
    $.ajax({
    	
        url:"https://www.behindthename.com/api/lookup.json?name= "+ $("#name").val()+"&key=at171901241" ,

        type: "GET",
        dataType: "json",
        success: function(data){
			console.log(data)
			
			console.log(data[0].gender)
			

			console.log(data[0].usages.length)
			
			if(data[0].gender=="m"){
			
				$("#names").css("background-image","url(img/m-back.jpg)");
			}else{
				$("#names").css("background-image","url(img/f-back.jpg)");
			}
			
			 $("#used").append("<h1>This name is used in </h1>");
			 
			for (let step = 0; step < data[0].usages.length ; step++) {
				
			  $("#used").append("<p>"+data[0].usages[step].usage_full+"</p>");
			  
			    
			}
			$("#gender").append("<h1> Gender</h1>");
			for (let step = 0; step < data[0].usages.length ; step++) {
				
			  $("#gender").append("<p>"+data[0].usages[step].usage_gender+"</p>");
	
			    
			}

			
			
		},
	
		
		error_code: function(err){
			console.log(err);
		}
        
      });//ajax 
}