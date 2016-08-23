var readyStateArray = ["UNSENT", "OPENED", "HEADERS_RECEIVED", "LOADING", "DONE"];  //Will not work with IE Browser
var IE_readyState = ["READYSTATE_UNINITIALIZED", "READYSTATE_LOADING", "READYSTATE_LOADED", "READYSTATE_INTERACTIVE","READYSTATE_COMPLETE"];

var responseTypeValues = ["DOMString","ArrayBuffer","Blob","Document"]
function ajaxCall(method, url, response_type, async) {
	 
	let data = {};
	
	let xhr = new XMLHttpRequest();
		
	xhr.open(method, url, async);

		  xhr.responseType = response_type; 
		  
		  xhr.onload = event => {
		  	
		  	if(xhr.status === 200) {
		  	
			//DoStuuf
		  	    
		  	}
		  };
	xhr.onreadystatechange = () => {
		//DO Stuff
	}
		  xhr.send();
}