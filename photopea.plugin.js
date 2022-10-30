/**
 * Open image in photopea plugin
 * v.1.0, 10/30/2022
 * 
 * Copy a json representation of the settings of this image to the clipboard
 * 
 * By JeLuF
 * 
 */

(function() {
	
	const ID_PREFIX="photopea";
	    
	PLUGINS['IMAGE_INFO_BUTTONS'].push({
		text: 'Open in Photopea',
		on_click: function(origRequest, image) {
			window.open('https://www.photopea.com/#%7B%22files%22:%5B%22' + image.src + '%22%5D%7D', '_blank').focus;
		},
		filter: function(origRequest, image) {
			return true;
		}
	})

})();