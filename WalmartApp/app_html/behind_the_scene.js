function choose() {
	var weather,tripType;
	var activity=0;	
	if (document.getElementsByName('weather')[0].checked){
		weather="hot";
	}
	else if (document.getElementsByName('weather')[1].checked){
		weather="cold";
	}
	else if (document.getElementsByName('weather')[2].checked){
		weather="wet";
	}
	else{
		alert("No Weather selected");
	}

	if (document.getElementsByName('trip_type')[0].checked){
		tripType="business";
	}
	else if (document.getElementsByName('trip_type')[1].checked){
		tripType="leisure";
	}
	else if (document.getElementsByName('trip_type')[2].checked){
		tripType="mix";
	}
	else{
		alert("No Trip type selected");
	}

	if (document.getElementsByName('activity')[0].checked){
		activity=activity+1;
	}
	if (document.getElementsByName('activity')[1].checked){
		activity=activity+10;
	}
	if (document.getElementsByName('activity')[2].checked){
		activity=activity+100;
	}
	if (document.getElementsByName('activity')[3].checked){
		activity=activity+1000;
	}
	if (document.getElementsByName('activity')[4].checked){
		activity=activity+10000;
	}
	if (activity===0){
		alert("No activity seletced")
	}

	console.log("weather:",weather)
	console.log("tripType:",tripType)
	console.log("activity:",activity)


}