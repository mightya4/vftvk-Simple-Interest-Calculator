function compute()
{
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    if(principal.value <= 0)
    {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    else {
        var interest = principal.value * years * rate /100;
        document.getElementById("result").innerHTML="\<br\>"+"If you deposit \<mark\>"+principal.value+"\<mark"+"\\"+"\>,\<br\>at an interest rate of \<mark\>"+rate+"%\<mark"+"\\"+"\>.\<br\>You will receive an amount of \<mark\>"+interest+"\<mark"+"\\"+"\>,\<br\>in the year \<mark\>"+year+"\<mark"+"\\"+"\>\<br\>"
    }

    
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        