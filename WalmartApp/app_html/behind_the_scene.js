function choose() {
	var weather,place;
	var activity = 0;
	var pla = document.getElementById("place");
	place = pla.value;
	if (pla.value === "london") {
		weather = "wet";
	}
	else if (pla.value === "barcelona") {
		weather = "hot";
	}
	else if (pla.value === "leh") {
		weather = "cold";
	}
	else if (pla.value === "goa") {
	    weather = "hot";
	}
	else{
		alert("No Place selected");
	}


	if (document.getElementsByName('activity')[0].checked){
		activity = activity+1;
	}
	if (document.getElementsByName('activity')[1].checked) {
	    activity = activity + 10;
	}
	if (document.getElementsByName('activity')[2].checked){
		activity = activity+100;
	}
	if (document.getElementsByName('activity')[3].checked){
		activity = activity+1000;
	}
	if (document.getElementsByName('activity')[4].checked){
		activity = activity+10000;
	}
	if (document.getElementsByName('activity')[5].checked){
		activity = activity+100000;
	}
	if (activity === 0){
	    alert("No activity seletced");
	}

	console.log("place:", place);
	console.log("activity:",activity);


}