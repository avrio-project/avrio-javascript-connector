const fetch = require('node-fetch')

/**
 * @description Gets all peers known to a node
 * @example
 * node.getNodes('127.0.0.1', true)
 * .then(nodes => console.log(JSON.stringify(nodes)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 */
module.exports.getNodes = async (ip, https) => {
	let data

	try {
		if (https) {
			data = await fetch(`https://${ip}/rest/peerlist`)
		} else {
			data = await fetch(`http://${ip}/rest/peerlist`)
		}

		return data.json()
	} catch (error) {
		return error
	}
}
