function validateForm()
{
	var x = document.forms["form"]["firstname"].value;
    	if (x == "") 
    	{
        alert("First Name is mandatory");
        return false;
   		}
   		var x = document.forms["form"]["lastname"].value;
    	if (x == "") 
    	{
        alert("Last Name is mandatory");
        return false;
   		}
      var x = document.forms["form"]["phone"].value;
      if (x == "") 
      {
        alert("Please Enter your mobile number");
        return false;
      }
}