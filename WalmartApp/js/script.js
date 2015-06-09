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
	    alert("No activity seletced");
	}

	var url = "http://api.walmartlabs.com/v1/taxonomy?apiKey=ktntg7wnkdyg2w2ax4u8jngd&format=xml";
	var xhr = createCORSRequest('GET', url);
	if (!xhr) {
	    alert('CORS not supported');
	}
	xhr.send();

	var text = xhr.responseText;
	alert("Response from CORS request to ", text);

	console.log("place:", place);
	console.log("activity:",activity);


<<<<<<< HEAD:WalmartApp/app_html/behind_the_scene.js
}


function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
=======

	$.ajax({
	  url: "http://api.walmartlabs.com/v1/taxonomy?format=json&apiKey=ktntg7wnkdyg2w2ax4u8jngd",
	  crossDomain:true,
	  context: document.body
	}).done(function() {
	  console.log("done");
	});

	// $.getJSON( "http://api.walmartlabs.com/v1/taxonomy?format=json&apiKey=ktntg7wnkdyg2w2ax4u8jngd", function( data ) {
	// 	console.log(data);
	// });
>>>>>>> origin/master:WalmartApp/js/script.js
}