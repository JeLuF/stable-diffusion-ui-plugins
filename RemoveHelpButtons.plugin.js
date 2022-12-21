// ==UserScript==
// @name         RemoveHelpButtons
// @version      1.0
// @description  Remove help buttons from the UI
// @author       JeLuF

document.styleSheets[0].insertRule('.help-btn { display: none !important; }')
