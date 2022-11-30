//Calculate Interest Based On Specified Values And Output Interest Message
function compute()
{
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    
    //Validate value in principal input is greater than zero and calculate interest accordingly
    if(principal.value <= 0 || principal.value == "")
    {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    else {
        //Calculate Interest If Valid Principal Value
        var interest = principal.value * years * rate /100;
        document.getElementById("result").innerHTML="\<br\>"+"If you deposit \<mark\>"+principal.value+"\<\/mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\<\/mark\>.\<br\>You will receive an amount of \<mark\>"+interest+"\<\/mark\>,\<br\>in the year \<mark\>"+year+"\<\/mark\>\<br\>"
    }

    
}

//Update Rate Text With Specified Rate Value
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        