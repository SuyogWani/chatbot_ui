const apiai = require('apiai');
const config = require('./config');

const app = apiai(config.CLIENT_ACCESS_TOKEN)
const options = {
	sessionId: Math.random(),
}

module.exports = function sendRequest (text, cb){
	const request = app.textRequest(text, options)

	request.on('response', response => {
		let reply = response.result.fulfillment.speech;
		cb(reply);
	})
	request.on('error', error => console.error(error))
	request.end();
}