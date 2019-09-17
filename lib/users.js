const fetch = require('node-fetch')

/**
 * @description Gets all usernames known to a node
 * @example
 * users.getUsernames('127.0.0.1', true)
 * .then(users => console.log(JSON.stringify(users)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 */
module.exports.getUsernames = async (ip, https) => {
	let data

	try {
		if (https) {
			data = await fetch(`https://${ip}/rest/usernames`)
		} else {
			data = await fetch(`http://${ip}/rest/usernames`)
		}

		return data.json()
	} catch (error) {
		return error
	}
}