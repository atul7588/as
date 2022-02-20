
  function validateForm(){
    var mobile= document.getElementById("mobile").value;
  
    var mobilecheck = /^[6789]{1}[0-9]{9}$/;
  
    
 
    
    if (mobilecheck.test(mobile)){
      document.getElementById('mobilerror').innerHTML='';
      
    }else{
      
      document.getElementById('mobilerror').innerHTML='****Invalid Mobile Number!****';
      return false;
    }
  }
