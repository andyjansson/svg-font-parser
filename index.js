var Promise = global.Promise || require('es6-promise').Promise;
var DOMParser = require('xmldom').DOMParser;
var fontFace = require('./lib/font-face');

module.exports = function (data) {
	return new Promise(function (resolve, reject) {
		var doc = new DOMParser().parseFromString(data.toString());
		
		var fontFaces = [];
		var fontFaceTags = doc.getElementsByTagName("font-face");
		for (var i = 0; i < fontFaceTags.length; i++) {
			fontFaces.push(fontFace(fontFaceTags.item(i)));
		}
		if (fontFaces.length) resolve(fontFaces);
		else reject();
	});
};