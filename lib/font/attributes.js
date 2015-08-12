module.exports = function (fontTag) {
	var obj = {};
	
	for (var i = 0; i < fontTag.attributes.length; i++) {
		var attr = fontTag.attributes.item(i);
		
		switch (attr.name) {
			case "id":
				obj.id = attr.value;
				break;
			case "horiz-origin-x":
				obj.horizontal = obj.horizontal || {};
				obj.horizontal.origin = obj.horizontal.origin || {};
				obj.horizontal.origin.x = Number(attr.value);
				break;
			case "horiz-origin-y":
				obj.horizontal = obj.horizontal || {};
				obj.horizontal.origin = obj.horizontal.origin || {};
				obj.horizontal.origin.y = Number(attr.value);
				break;
			case "horiz-adv-x":
				obj.horizontal = obj.horizontal || {};
				obj.horizontal.advance = Number(attr.value);
				break;
			case "vert-origin-x":
				obj.vertical = obj.vertical || {};
				obj.vertical.origin = obj.vertical.origin || {};
				obj.vertical.origin.x = Number(attr.value);
				break;
			case "vert-origin-y":
				obj.vertical = obj.vertical || {};
				obj.vertical.origin = obj.vertical.origin || {};
				obj.vertical.origin.y = Number(attr.value);
				break;
			case "vert-adv-y":
				obj.vertical = obj.vertical || {};
				obj.vertical.advance = Number(attr.value);
				break;
		}
	}
	return obj;
};