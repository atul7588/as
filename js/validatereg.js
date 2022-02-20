
  function validateregForm(){
    
    var name= document.getElementById("name").value;
    var mobile= document.getElementById("regmobile").value;
	var password= document.getElementById("regPass").value;

    
    
    var namecheck = /^[A-Za-z ]{3,30}$/;
    var mobilecheck = /^[6789]{1}[0-9]{9}$/;
    var emailcheck = /^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var passcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    
    
    if (namecheck.test(name)){
      document.getElementById('namerror').innerHTML='';
      
    }else{
      
      document.getElementById('namerror').innerHTML='** Enter Correct Name **';
      return false;
    }
    
    
    if (mobilecheck.test(mobile)){
      document.getElementById('regmobilerror').innerHTML='';
      
    }else{
      
      document.getElementById('regmobilerror').innerHTML='**  Invalid Mobile Number **';
      return false;
    }
	
	if(passcheck.test(password)){
		document.getElementById('regpasserror').innerHTML='';
	}else{
		
		document.getElementById('regpasserror').innerHTML='(!@#$%^&*) and Number Needed';
		return false;
  }

  }