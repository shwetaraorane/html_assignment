function validateForm
{
  var firstname = document.forms["form"]["FirstName"].value;
  var lastname = document.forms["form"]["LastName"].value;
  var telephoneno = document.forms["form"]["TelephoneNo"].value;
  var emailid = document.forms["form"]["EmailId"].value;
  var address=document.forms["form"]["Address"].value;
  var panno=document.forms["form"]["PanNo"].value;
  var aadharno=document.forms["form"]["AadharNo"].value;
  if (allLetter(firstname)) {return false;}
}
function allLetter(firstname)
{ 
  var letters = "/[A-Za-z]+$/";
  if(firstname.value.match(letters))
  {
    return true;
  }
  else
  {
    alert('Username must have alphabet characters only');
    return false;
  }
}