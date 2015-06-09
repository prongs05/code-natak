function choose() {
	var weather,tripType,place;
	var apiKey="ktntg7wnkdyg2w2ax4u8jngd";
	var activity=0;	
	var place = document.getElementById('place').value;

	if (place === "london") {
		weather = "wet";
	}
	else if (place === "barcelona") {
		weather = "hot";
	}
	else if (place === "leh") {
		weather = "cold";
	}
	else if (place === "goa") {
	    weather = "hot";
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
	    alert("No activity selected");
	}
	console.log("place:", place);
	console.log("activity:",activity);

	// $.getJSON( "http://api.walmartlabs.com/v1/taxonomy?format=json&apiKey=ktntg7wnkdyg2w2ax4u8jngd", function( data ) {
	// 	console.log(data);
	// });

	$.getJSON( "http://api.walmartlabs.com/v1/search?query=ipod&apiKey=ktntg7wnkdyg2w2ax4u8jngd&callback=?",function( data ) {
		console.log(data);
	}); 
	// $.getJSON("http://api.walmartlabs.com/v1/taxonomy?format=json&apiKey=ktntg7wnkdyg2w2ax4u8jngd&callback=?foo");
}

