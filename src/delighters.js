/*
	Delighters - Add CSS animations to delight users as they scroll down.
	(c) 2018 - Q42
	Written by Martin Kool
	https://github.com/Q42/delighters
*/
var Delighters = new (function() {
	var self = this,
			dels = this.dels = [],

			// default options
			options = {
				attribute: 	'data-delighter',
				classNames: ['delighter', 'started', 'ended'],
				start: 			0.75, // default start threshold
				end: 				0.75, // default end threshold
				autoInit: 	true 	// initialize when DOMContentLoaded
			};

	document.addEventListener("DOMContentLoaded", function() {
