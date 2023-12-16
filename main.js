exports.handler = function (event, context) {
	'use strict';
	context.succeed({
		statusCode: 200,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(event)
	});
};


// okay not bad progress today - I have a working lambda function that can be called from the browser