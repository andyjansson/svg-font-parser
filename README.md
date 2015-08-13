# svg-font-parser [![Build Status][ci-img]][ci]

SVG font parser

[ci-img]:  https://travis-ci.org/andyjansson/svg-font-parser.svg
[ci]:      https://travis-ci.org/andyjansson/svg-font-parser

## Installation

```js
npm install svg-font-parser
```

## Usage 

```js
var fs = require('fs');
var parser = require('svg-font-parser');

fs.readFile('font.svg', function (err, contents) {
	if (err) throw err;
	parser(contents).then(function (result) {
		console.log(result);
	});
});
```

Outputs:

```json
[
	{
		...
		"family": "SourceSansPro-Regular",
		"weight": ["400"],
		"stretch": ["normal"],
		...
	}
	...
]
```