function validateForm()
{
      debugger
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
      var x = document.forms["form"]["office"].value;
      if (x == "") 
      {
        alert("Please Enter your office number");
        return false;
      }
      var x = document.forms["form"]["email"].value;
      if (x == "") 
      {
        alert("Please Enter your email address");
        return false;
      }
      var x = document.forms["form"]["password"].value;
      if (x == "") 
      {
        alert("Password is mandatory");
        return false;
      }
      var x = document.forms["form"]["radio1"].value;
      if (x == "") 
      {
        alert("Please fill in your gender");
        return false;
      }
      var x=document.forms["form"]["aboutyou"].value;
      if (x == "") 
      {
        alert("Please write about yourself");
        return false;
      }
      var x=document.forms["form"]["password"].value;
      var y=document.forms["form"]["confirmpass"].value;
      if (x!=y)
       {
        alert("Passwords do not match")
        return false;
       }
      /* var x = document.forms["form"]["month"].value;
       var y = document.forms["form"]["day"].value;
       var z = document.forms["form"]["year"].value;
       if( x=="month" || y="day" || z="year")
       {
        alert("Enter your Birthdate");
        return false;
       }
       var curYear = new Date().getUTCFullYear();
    /*  function validatePassword()
        {
          if (document.form.password.value != document.form.confirmpass.value) 
          {
            alert("Passwords do not match.");
            return false;
          }
          return false;

        }
      /*  function CalculateAge() {
            var curYear = new Date().getUTCFullYear();
            var age = curYear - document.getElementById('Year').value;
            document.getElementById('Age').innerHTML = age;
        }
     
     CalculateAge();
     validatePassword();*/
}