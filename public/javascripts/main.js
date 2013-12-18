// media query
var pixelRatio = (function(){
	var pixelRatio = window.devicePixelRatio || 1;
	if(pixelRatio > 1.5){
		return 2;
	}else if(pixelRatio > 1){
		return 1.5;
	}
	return 1;
})();


$.ready(function() {
	// verification of local storage
	function isSuportLocalStorage(key, value) {
		var storage = window.localStorage;
		try {
			storage.setItem(key, value);
			storage.removeItem(key);
		}catch(e) {
			//log.debug(e);
			return false;
		}
		return true;
	}

	// convert CSS background-image path to ratio-oriented path.
	function adjustCss(href) {
		// find target css
		var stylesheets = document.styleSheets;
		for (var i = 0; i < stylesheets.length; i++) {
			var stylesheet = stylesheets[i];
			if (stylesheet.ownerNode.getAttribute('href') == href) {
				var rules = stylesheet.cssRules;
				for (var j = 0; j < rules.length; j++) {
					var rule = rules[j];
					var style = rule.style;
					if (style) {
						var bgimage = style.getPropertyValue('background-image');
						if (bgimage && bgimage.indexOf('$ratio') >= 0) {
							rule.style.setProperty('background-image', bgimage.replace(/\$ratio/, pixelRatio), null);
						}
					}
				}
			}
		}
	}

	var w = window;
	w.tag = $.tag;
	w.log = $.log;

	$.load(
		'./js/bingo.min.js',
		function() {
			$('body').css({height: 1000 + 'px'}); // set dummy height
			setTimeout(function() {
				window.scrollTo(0, 1);
				var v = $.viewport().window;
				$('body').css({width: v.width + 'px', height: v.height + 'px'});
				bingo.init();
			}, 1000);
		}
	);
	var cssurl = './css/bingo.css';
	$.load(cssurl, function() {
		adjustCss(cssurl)
	});
});

