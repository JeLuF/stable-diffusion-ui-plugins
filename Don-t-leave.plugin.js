// ==UserScript==
// @name         Don't Leave
// @version      1.0
// @description  Show a warning before leaving/reloading the page
// @author       JeLuF


window.addEventListener("beforeunload", function(e) {
    const msg = "Unsaved pictures will be lost!";
    (e || window.event).returnValue = msg;
	return msg;

});