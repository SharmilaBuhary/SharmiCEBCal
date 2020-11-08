function Bill_Calculate()
{
	let s=document.getElementById("unit").value;
	if(s<30)
	{
		document.getElementById("rs").innerHTML=Number(s)*7.85+"Rs";
	}
	else if(s<=60)
	{
	var rs=235.50+(Number(s)-30)*7.85;
    document.getElementById("rs").innerHTML=rs+"Rs";	
	}
	else if(s<=90)
	{
	var rs=471+(Number(s)-60)*10;
    document.getElementById("rs").innerHTML=rs+"Rs";	
	}
	else if(s<=90)
	{
	var rs=771+(Number(s)-90)*27.75;
    document.getElementById("rs").innerHTML=rs+"Rs";	
	}
	else
	{
		document.getElementById("rs").innerHTML=1603.50+(Number(s)-120)*32.48+"Rs";
	}
}