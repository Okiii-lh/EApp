mui.init();
function turn(url){
	mui.openWindow({
	    id: url,
	    url: url,
	});
}

function showAssess(){
	turn("assess.html")
}

function showOrgnize(){
	turn("organize.html")
}

function showUnit(){
	turn("unit.html")
}