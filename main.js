// main.js

'use strict';

var iframe = document.createElement( 'iframe' );
document.body.appendChild( iframe );

var iDoc = iframe.contentDocument;


var styles 	= iDoc.createElement( 'link' );
styles.href = chrome.runtime.getURL( 'styles.css' );
styles.type = 'text/css';
styles.rel 	= 'stylesheet';

var onStyesLoaded = function () {
	var body = iDoc.body,
		main = iDoc.createElement( 'main' );
	body.appendChild( main );

	body.style.height = 'auto';
	console.log( body.offsetHeight );  // Should be 200px because 
	body.style.height = '100%';
	console.log( body.offsetHeight );

	// main.style.height = '1000px';
	body.style.height = 'auto';
	console.log( body.offsetHeight );

	setTimeout(function(){
		console.log( body.offsetHeight );

		// Further tests
		main.classList.add( 'shorter' );
		console.log( 'class added:', body.offsetHeight );
		main.classList.remove( 'shorter' );
		console.log( 'class removed:', body.offsetHeight );

	}, 0);  // end setTimeout
};  // End onStylesLoaded()

styles.addEventListener( 'load', onStyesLoaded );

iDoc.head.appendChild( styles )


// ==================================
// Without 'load' event listener:
// ==================================
// Without `main.style.height = '1000px';` commented out, output is:
// main.js:23 134
// main.js:25 150
// main.js:29 1000
// main.js:32 1000

// With `main.style.height = '1000px';` commented out, output is:
// main.js:23 134
// main.js:25 150
// main.js:29 134
// main.js:32 200
// ^^^ after the setTimeout, the css styles take effect
