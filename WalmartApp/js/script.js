var map=[];
var placeToTemp=[];
placeToTemp["leh"]="winter";
placeToTemp["barcelona"]="summer";
placeToTemp["goa"]="summer";
var numItems = 24;
var searchQuery;
var searchQuery_flag = 0;

function check() {
    var place = document.getElementById("place").value;
    if (place === "barcelona" || place === "goa")
        disable();
    else if (place === "leh")
        enable();
}
function enable() {
    document.getElementById("snow").disabled = false;
    document.getElementById("swim").disabled = true;
}

function disable() {
    document.getElementById("snow").disabled = true;
    document.getElementById("swim").disabled = false;
}

function searchText() {
    var text = document.getElementById("walmartSearchInput").value;
    if (text != "") {
        searchQuery = text;
        searchQuery_flag = 1;
        containerFill(0, 1);
    }
}

function receiveVars(){
	var parameters = location.search.substring(1).split("&");	
    for (var i=0; i<parameters.length;i++){
    	var temp = parameters[i].split("=");
    	if(temp[0]==="place"){
    		temp[1]=placeToTemp[temp[1]];
    	}
    	if(map[temp[0]]!=null){
    		// if(map[temp[0]] instanceof Array){
    		// 	map[temp[0]][map[temp[0]].length]=temp[1];
    		// }
    		// else{
    		// 	map[temp[0]]=[map[temp[0]],temp[1]];
    		// }
    		map[temp[0]]=map[temp[0]]+"+"+temp[1];
    	}
    	else{
    		map[temp[0]]=temp[1];
    	}
    }
	console.log(map);
	// containerFill();
}
var gCategoryId;
var start=1;
var numItems=24;

function getId_Query(){
    var query = map["place"];
    //Clothes
    if (gCategoryId === '5438_133162'){
        if (map["activity"] === "business") {
            gCategoryId = gCategoryId + "_645179";
            query = "women";
        }
        else if (map["activity"] === "swim") {
            gCategoryId = "5438_1229269_163846";
            query = map["activity"];
        }
        else if (map["activity"] === "climb") {
            gCategoryId = gCategoryId + "_592996";
        }
        else if (map["activity"] === "party") {
            gCategoryId = gCategoryId + "_538874";
        }
        else if (map["activity"] === "sightsee") {
            gCategoryId = gCategoryId + "_1228422";
        }
        else if (map["activity"] === "snow") {
            gCategoryId = gCategoryId + "_1218839";
        }
    }
    else if (gCategoryId === "5438_1045799"){ //Bags
        if (map["activity"] === "business") {
            gCategoryId = gCategoryId + "_1043856";
            query = map["activity"];
        }
        else if (map["activity"] === "swim") {
            gCategoryId = gCategoryId + "_1045800";
            query = "bag";
        }
        else if (map["activity"] === "climb") {
            gCategoryId = gCategoryId + "_1045801";
            query = "bag"
        }
        else if (map["activity"] === "party") {
            gCategoryId = gCategoryId + "_1045800";
            query = "bag"
        }
        else if (map["activity"] === "sightsee") {
            gCategoryId = gCategoryId + "_1045801";
            query = "bag"
        }
        else if (map["activity"] === "snow") {
            gCategoryId = gCategoryId + "_1045801";
            query = "bag"
        }
    }
    else if (gCategoryId === "5438_1045804_1045806") { //Footwear
        if (map["activity"] === "business") {
            query = "work";
        }
        else if (map["activity"] === "swim") {
            query = "flip flop";
        }
        else if (map["activity"] === "climb") {
            query = "walk";
        }
        else if (map["activity"] === "party") {
            query = map["activity"];
        }
        else if (map["activity"] === "snow") {
            query = query + map["activity"];
        }
    }
    else if (gCategoryId === "3920") { //Books
        query = map["activity"];
    }
    else if (gCategoryId === "3944") { //Electronics
        if (map["activity"] === "business") {
            query = "laptops tablets battery"
        }
        else if (map["activity"] === "swim") {
            query = "music water";
        }
        else if (map["activity"] === "climb") {
            gCategoryId = gCategoryId + "_3945";
            query = "battery camera";
        }
        else if (map["activity"] === "party") {
            gCategoryId = gCategoryId + "_133277";
            query = "camera"
        }
        else if (map["activity"] === "sightsee") {
            gCategoryId = gCategoryId + "_133277";
            query = "camera"
        }
        else if (map["activity"] === "snow") {
            gCategoryId = gCategoryId + "_133277";
            query = "camera"
        }
    }
    else if (gCategoryId === "5438_1045799_426265") { //Accessories
        if (map["activity"] === "swim") {
            gCategoryId = "4125_4161_1043949";
            query = "swim";
        }
        else if (map["activity"] === "climb") {
            gCategoryId = "4125";
            query = "wear camp";
        }
        else if (map["activity"] === "party") {
            gCategoryId = "3891";
            query = "jewel"
        }
        else if (map["activity"] == "snow") {
            gCategoryId = "4125_546956_1075804";
        }
    }

    return query;

}

function containerFill(categoryId,thisStart){
	if(thisStart!=null){	
		start=thisStart
	}
	console.log(categoryId);
	if(categoryId===null){
		alert("SHOULDN'T HAPPEN")
	}
	gCategoryId=categoryId;
	var apiKey="ktntg7wnkdyg2w2ax4u8jngd";

	var head		= '<div class="box'
    var imgLeft		= '<img class="productImage" id="letThisBeForNow" src="'
    var imgRight	= '"/>'
	var nameLeft	= '<p id="someId" class="someClass">'
	var nameRight	= '</p>'
    var buttonLeft	= '<a href= "'
    var buttonRight	= '">Buy</a>'
    var tail 		= '</div>'

    var finalString = "&nbsp;";

    var query = getId_Query();
    categoryId = gCategoryId;

    function fillCont(finalString){
    	document.getElementById("productContainer").innerHTML=finalString;	
    }

    if (searchQuery_flag == 1) {
        search = "http://api.walmartlabs.com/v1/search?apiKey=" + apiKey + "&start=" + start + "&query=" + searchQuery + "&numItems=" + numItems + "&callback=?";
    }
    else {
        search = "http://api.walmartlabs.com/v1/search?categoryId=" + categoryId + "&apiKey=" + apiKey + "&start=" + start + "&query=" + query + "&numItems=" + numItems + "&callback=?";
    }
	$.getJSON( search, function(data) {
		// console.log(data);
		if(data.numItems===0){
			alert("No results found");
		}
		else{
			for(var i=0;i<data.items.length;i++){
				var imgStr=imgLeft+data.items[i].thumbnailImage+imgRight;
				var nameStr=nameLeft+data.items[i].name+" - $"+data.items[i].salePrice.toString()+nameRight;
				var buttonStr=buttonLeft+data.items[i].productUrl+buttonRight;

				if(i%3==0){
					finalString = finalString + head + ' newRow">'+ imgStr + nameStr + buttonStr + tail;				
				}
				else{
					finalString = finalString + head + '">' + imgStr + nameStr + buttonStr + tail;
				}
			}
			fillCont(finalString);
		}
	});
}

function nextPage() {
    start = start + numItems;
    containerFill(gCategoryId,start);
}
