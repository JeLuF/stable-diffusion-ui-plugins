/**
 * Copy Settings plugin
 * v.1.0, 10/30/2022
 * 
 * Copy a json representation of the settings of this image to the clipboard
 * 
 * By JeLuF
 * 
 */

(function() {
	
	const ID_PREFIX="copy-settings";

    const popupContainer = document.createElement('div');
    popupContainer.id = `${ID_PREFIX}-popup`;
	popupContainer.style.display          = 'none';
	popupContainer.style.position         = 'absolute';
	popupContainer.style.width            = '20em';
	popupContainer.style.top              = '1em';
	popupContainer.style.right            = '1em';
	popupContainer.style.padding          = '0.5em';
	popupContainer.style["border-radius"] = '0.5em';
	
	document.body.appendChild(popupContainer);

    function popup(msg,fg='var(--button-text-color)',bg='var(--button-color)') {
		popupContainer.innerHTML         = msg;
		popupContainer.style.background  = bg;
		popupContainer.style.color       = fg;
		popupContainer.style.display     = 'block';
		
		setTimeout( function(){popupContainer.style.display='none';}, 1500 );
	}

	function fallbackCopyTextToClipboard(text) {
	  var textArea = document.createElement("textarea");
	  textArea.value = text;
	  
	  // Avoid scrolling to bottom
	  textArea.style.top = "0";
	  textArea.style.left = "0";
	  textArea.style.position = "fixed";

	  document.body.appendChild(textArea);
	  textArea.focus();
	  textArea.select();

	  try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		popup('Copying text command was ' + msg);
	  } catch (err) {
		console.error('Fallback: Could not copy text: ', err);  
		popup('Fallback: Oops, unable to copy');
		
	  }
	  document.body.removeChild(textArea);
	}
	
	function copyTextToClipboard(text) {
	  if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		return;
	  }
	  navigator.clipboard.writeText(text).then(function() {
		popup('Copied to clipboard');
	  }, function(err) {
		console.error('Async: Could not copy text: ', err);
		popup('Could not copy text');
	  });
	}
	    
	PLUGINS['IMAGE_INFO_BUTTONS'].push({
		text: 'Copy settings (TXT)',
		on_click: function(origRequest, image) {

			let userRequest = getCurrentUserRequest();
			result = "";
			for ([k,v] of Object.entries(origRequest)) { result +=  k+ ': ' + v + '\n'; }
			copyTextToClipboard(result);
		},
		filter: function(origRequest, image) {
			return true;
		}
	})

})();