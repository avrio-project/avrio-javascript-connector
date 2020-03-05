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
			data = await fetch(`https://${ip}/json_rpc/peerlist`)
		} else {
			data = await fetch(`http://${ip}/json_rpc/peerlist`)
		}

		return data.json()
	} catch (error) {
		return error
	}
}

/**
 * @description Gets block by hash
 * @example
 * node.getBlock('127.0.0.1', true, "0x3i4ihuhv9uh349u...")
 * .then(block => console.log(JSON.stringify(block)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 * @param {String} The hash of the block
 */
module.exports.getBlock = async (ip, https, hash) => {
	let data

	try {
		if (https) {
			data = await fetch(`https://${ip}/json_rpc/block/${hash}`)
		} else {
			data = await fetch(`http://${ip}/json_rpc/block/${hash}`)
		}

		return data.json()
	} catch (error) {
		return error
	}
}

/**
 * @description Gets the node status
 * @example
 * node.getStatus('127.0.0.1', true)
 * .then(state => console.log(JSON.stringify(state)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 */
module.exports.getStatus = async (ip, https, hash) => {
	let data

	try {
		if (https) {
			data = await fetch(`https://${ip}/json_rpc/status`)
		} else {
			data = await fetch(`http://${ip}/json_rpc/status`)
		}

		return data.json()
	} catch (error) {
		return error
	}
}

