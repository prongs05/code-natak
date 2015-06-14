function choose() {
	var weather,tripType,place;
	
	var activity=0; 
	var place = document.getElementById('place').value;

	var secretID="5438_133202_559973";


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
	console.log("activity:", activity);
	window.open("reco.html");
	
	/*var taxonomy;
	function parseArray(pObj,id, completeId,callback){
		// console.log("id ",id, " completeId ",completeId);
		// console.log("pObj ",pObj.length);
		for(var i=0; i<pObj.length; i++){
			if (pObj[i].id===id){
				console.log("FOUND: ",pObj[i].name);
				if(id!==completeId){
					var newId;
					if(completeId.slice(id.length+1,completeId.length).indexOf('_') !== -1){
						newId=completeId.slice(0,completeId.slice(id.length+1,completeId.length).indexOf("_")+id.length+1);
					}
					else {
						newId=completeId;
					}
					parseArray(pObj[i].children,newId,completeId,callback);
				}
				else{
					callback(pObj[i]);
				}
			}
		}
	}
	
	$.getJSON( "../taxonomy.json", function( data ) {
		taxonomy = data;
		parseArray(taxonomy.categories,secretID.slice(0,secretID.indexOf("_")),secretID,function(sth){
			console.log("Something", sth);
		});
	});*/

 	// window.location.href = "reco.html";
}

function containerFill(){
	var apiKey="ktntg7wnkdyg2w2ax4u8jngd";

	var head		= '<div class="box'
    var imgLeft		= '<img class="productImage" id="letThisBeForNow" src="'
    var imgRight	= '"/>'
	var nameLeft	= '<p id="someId" class="someClass">'
	var nameRight	= '</p>'
    var buttonLeft	= '<a href= "'
    var buttonRight	= '">Buy</a>'
    var tail 		= '</div>'

    var finalString = "&nbsp;"  ;

    var query="cold weather";     
    var search="http://api.walmartlabs.com/v1/search?apiKey="+apiKey+"&query="+query+"&&numItems=25&callback=?";  

    function fillCont(finalString){
    	document.getElementById("productContainer").innerHTML=finalString;	
    }

	$.getJSON( search, function(data) {
		// console.log(data);
		for(var i=0;i<data.items.length;i++){
			// console.log(data.items[i].name, data.items[i].thumbnailImage, data.items[i].productUrl);
			var imgStr=imgLeft+data.items[i].thumbnailImage+imgRight;
			var nameStr=nameLeft+data.items[i].name+nameRight;
			var buttonStr=buttonLeft+data.items[i].productUrl+buttonRight;
			console.log(imgStr, nameStr, buttonStr);

			if(i%3==0){
				finalString = finalString + head + ' newRow">'+ imgStr + nameStr + buttonStr + tail;				
			}
			else{
				finalString = finalString + head + '">' + imgStr + nameStr + buttonStr + tail;
			}
			console.log("temp", finalString)
		}
		fillCont(finalString);
	}); 


	// console.log("finalString",finalString);
	
}
