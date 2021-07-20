

function updateRate()
{
	var rateval=document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval+"%";
}

function compute()
{
	var principal=document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest=principal*years*rate/100;
    var year=new Date().getFullYear()+parseInt(years);
    var amount=parseFloat(interest);
if(parseFloat(principal) == 0 || parseFloat(principal)<0){
	/*document.getElementById("result").innerHTML=*/window.alert("Enter a positive number");
}
else{
	document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
}
}