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
			data = await fetch(`https://${ip}/json_rpc/usernames`)
		} else {
			data = await fetch(`http://${ip}/json_rpc/usernames`)
		}

		return data.json()
	} catch (error) {
		return error
	}
}
/**
 * @description Gets the balance of a username or key
 * @example
 * users.getBalance('127.0.0.1', true, "printersco")
 * .then(bal => console.log(JSON.stringify(bal)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 * @param {String} The Username or address of the subject
 */
module.exports.getBalance = async (ip, https, key) => {
	let data

	try {
		if (https) {
			data = await fetch(`https://${ip}/json_rpc/balance/${key}`)
		} else {
			data = await fetch(`http://${ip}/json_rpc/balance/${key}`)
		}

		return data.json()
	} catch (error) {
		return error
	}
}
