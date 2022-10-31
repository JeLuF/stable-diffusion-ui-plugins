// ==UserScript==
// @name         Ski-SDUI-MoreResolutions
// @version      0.1
// @description  More Resolution Options
// @author       Super.Skirv, JeLuF
// ==/UserScript==

(function() {

	options="";
	for(i=6; i<=32; i++) {
		options += '<option value="' + (64*i) + '">' + (64*i) + '</option>';
	}
    document.getElementById('width').innerHTML = options;
    document.getElementById('height').innerHTML = options;

})();