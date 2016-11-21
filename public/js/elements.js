// This file contains all added elements and experimental features


//Range slider
function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
  var latestResponse = Api.getResponsePayload();
  var context = latestResponse.context;
  Api.sendRequest(newValue, context);
}

//Buttons
function yesBye() {
    var latestResponse = Api.getResponsePayload();
    var context = latestResponse.context;
    Api.sendRequest("yes", context);
}
function noBye() {
    var latestResponse = Api.getResponsePayload();
    var context = latestResponse.context;
    Api.sendRequest("no", context);
}
