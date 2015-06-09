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
}