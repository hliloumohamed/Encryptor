function convert1() {
	var msgi = document.getElementById("msg0").value;
	 	var msgf=""
 	 for (var i = 0; i < msgi.length ; i++){
 	var ic = msgi.charCodeAt(i);
 	var fc = ic+5;
 	var A = String.fromCharCode(fc);

 	var msgf = msgf + A;

}


 	document.getElementById("msg1").innerHTML = msgf; 
};
function convert2() {
	var msgi = document.getElementById("msg0").value;
	 	var msgf=""
 	 for (var i = 0; i < msgi.length ; i++){
 	var ic = msgi.charCodeAt(i);
 	var fc = ic-5;
 	var A = String.fromCharCode(fc);

 	var msgf = msgf + A;

}


 	document.getElementById("msg1").innerHTML = msgf; 
};
