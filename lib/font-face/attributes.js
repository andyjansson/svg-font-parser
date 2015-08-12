var panose = require('./panose.js');

module.exports = function (fontFaceTag) {
	var obj = {};
	
	for (var i = 0; i < fontFaceTag.attributes.length; i++) {
		var attr = fontFaceTag.attributes.item(i);
		
		switch (attr.name) {
			case "id":
				obj.id = attr.value;
				break;
			case "font-family": 
				obj.family = attr.value;
				break;
			case "font-style":
				obj.style = attr.value.split(",");
				break;
			case "font-variant":
				obj.variant = attr.value.split(",");
				break;
			case "font-weight":
				obj.weight = attr.value.split(",");
				break;
			case "font-stretch":
				obj.stretch = attr.value.split(",");
				break;
			case "font-size":
				obj.size = attr.value;
				break;
			case "unicode-range":
				obj.unicodeRange = attr.value.split(",");
				break;
			case "units-per-em":
				obj.unitsPerEm = Number(attr.value);
				break;
			case "panose-1":
				obj.panose = panose(attr.value.split(' ').map(function(val) { return Number(val); }));
				break;
			case "stemv":
				obj.stemv = Number(attr.value);
				break;
			case "stemh":
				obj.stemh = Number(attr.value);
				break;
			case "slope":
				obj.slope = Number(attr.value);
				break;
			case "cap-height":
				obj.capHeight = Number(attr.value);
				break;
			case "x-height":
				obj.xHeight = Number(attr.value);
				break;
			case "accent-height":
				obj.accentHeight = Number(attr.value);
				break;
			case "ascent":
				obj.ascent = Number(attr.value);
				break;
			case "descent":
				obj.descent = Number(attr.value);
				break;
			case "widths":
				obj.widths = attr.value;
				break;
			case "bbox":
				obj.boundingBox = attr.value.split(',').map(function(val) { return Number(val); });
				break;
			case "idegraphic":
				obj.horizontal = obj.horizontal || {};
				obj.horizontal.ideographic = Number(attr.value);
				break;
			case "alphabetic":
				obj.horizontal = obj.horizontal || {};
				obj.horizontal.alphabetic = Number(attr.value);
				break;
			case "mathematical":
				obj.horizontal = obj.horizontal || {};
				obj.horizontal.mathematical = Number(attr.value);
				break;
			case "hanging":
				obj.horizontal = obj.horizontal || {};
				obj.horizontal.hanging = Number(attr.value);
				break;
			case "v-ideographic":
				obj.vertical = obj.vertical || {};
				obj.vertical.ideographic = Number(attr.value);
				break;
			case "v-alphabetic":
				obj.vertical = obj.vertical || {};
				obj.vertical.alphabetic = Number(attr.value);
				break;
			case "v-mathematical":
				obj.vertical = obj.vertical || {};
				obj.vertical.mathematical = Number(attr.value);
				break;
			case "v-hanging":
				obj.vertical = obj.vertical || {};
				obj.vertical.hanging = Number(attr.value);
				break;
			case "underline-position":
				obj.underline = obj.underline || {};
				obj.underline.position = Number(attr.value);
				break;
			case "underline-thickness":
				obj.underline = obj.underline || {};
				obj.underline.thickness = Number(attr.value);
				break;
			case "strikethrough-position":
				obj.strikethrough = obj.strikethrough || {};
				obj.strikethrough.position = Number(attr.value);
				break;
			case "strikethrough-thickness":
				obj.strikethrough = obj.strikethrough || {};
				obj.underline.thickness = Number(attr.value);
				break;
			case "overline-position":
				obj.overline = obj.overline || {};
				obj.overline.position = Number(attr.value);
				break;
			case "overline-thickness":
				obj.overline = obj.overline || {};
				obj.overline.thickness = Number(attr.value);
				break;
		}
	}
	
	return obj;
}