function validateForm() 
		{
    	var x = document.forms["form"]["FirstName"].value;
    	if (x == "") 
    	{
        alert("First Name is mandatory");
        return false;
   		}
   		var x = document.forms["form"]["LastName"].value;
    	if (x == "") 
    	{
        alert("Last Name is mandatory");
        return false;
   		}
      var x = document.forms["form"]["MobileNo"].value;
      if (x == "") 
      {
        alert("Please Enter your mobile number");
        return false;
      }
		}
    