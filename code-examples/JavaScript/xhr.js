//EventTarget is an interface implemented by objects that can receive events and may have listeners for them
var eventTargets = ["Element","Document","Window","XMLHttpRequest","AudioNode","AudioContext"];
var eventTargetMethods = ["addEventListener()","removeEventListener()","dispatchEvent()"];

var readyStateArray = ["UNSENT", "OPENED", "HEADERS_RECEIVED", "LOADING", "DONE"];  //Will not work with IE Browser
var IE_readyState = ["READYSTATE_UNINITIALIZED", "READYSTATE_LOADING", "READYSTATE_LOADED", "READYSTATE_INTERACTIVE","READYSTATE_COMPLETE"];

var responseTypeValues = ["DOMString","ArrayBuffer","Blob","Document","json","text","moz-blob","moz-chunked-text","moz-chunked-arraybuffer","ms-stream"];
function ajaxCall(method, url, response_type) {
	 
	let data = {};
	
	let xhr = new XMLHttpRequest();
		
	xhr.open(method, url, true);

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