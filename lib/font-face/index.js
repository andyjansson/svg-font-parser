var attributes = require('./attributes.js');
var font = require('../font');
var extend = require('util')._extend;

module.exports = function (fontFaceTag) {
	var fontFace = attributes(fontFaceTag);
	if (fontFaceTag.parentNode.nodeName === 'font') 
		fontFace = extend(fontFace, font(fontFaceTag.parentNode));

	return fontFace;
};