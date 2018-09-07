/*function getAge(birth) {

    var today = new Date();
    var nowyear = today.getFullYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();

    var birthyear = birth.getFullYear();
    var birthmonth = birth.getMonth();
    var birthday = birth.getDate();

    var age = nowyear - birthyear;
    var age_month = nowmonth - birthmonth;
    var age_day = nowday - birthday;
   
    if(age_month < 0 || (age_month == 0 && age_day <0)) {
            age = parseInt(age) -1;
        }
    alert(age);
   
    if ((age == 18 && age_month <= 0 && age_day <=0) || age < 18) {
    }
    else {
        alert("You have crossed your 18th birthday !");
    }

}


<div>
        Day:<input type="text" id="txtday" />
        Month:<input type="text" id="txtMonth" />
        Year:<input type="text" id="txtYear" onblur="CalculateAge();" />
        <input type="button" value="Calculate Age" onclick="CalculateAge();" />
        <span id="Age"></span>
    </div>
    <script type="text/javascript">*/
        function CalculateAge() {
            var curYear = new Date().getUTCFullYear();
            var age = curYear - document.getElementById('txtYear').value;
            document.getElementById('Age').innerHTML = age;
        }
         
  /*  </script>


    function Validate() {
        var password = document.getElementById("txtPassword").value;
        var confirmPassword = document.getElementById("txtConfirmPassword").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }*/