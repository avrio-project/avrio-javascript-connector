import { createHash } from 'crypto';
import pkg from 'bs58';
const { encode, decode } = pkg;
import fetch from 'node-fetch'
/**
 * @description Gets all peers known to a node
 * @example
 * node.getNodes('127.0.0.1', true)
 * .then(nodes => console.log(JSON.stringify(nodes)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 */
export async function getNodes(ip, https) {
    let data

    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/peerlist`)
        } else {
            data = await fetch(`http://${ip}/api/v1/peerlist`)
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
export async function getBlock(ip, https, hash) {
    let data

    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/block/${hash}`)
        } else {
            data = await fetch(`http://${ip}/api/v1/block/${hash}`)
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
export async function getStatus(ip, https) {
    let data

    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/status`)
        } else {
            data = await fetch(`http://${ip}/api/v1/status`)
        }

        return data.json()
    } catch (error) {
        return error
    }
}

/**
 * @description Gets the number of blocks for a certain chain
 * @example
 * node.getBlockCount('127.0.0.1', true, "0x3i4ihuhv9uh349u...")
 * .then(state => console.log(JSON.stringify(state)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 * @param {String} chain The chain to get the block count for
 */
export async function getBlockCount(ip, https, chain) {
    let data

    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/blockcount/${chain}`)
        } else {
            data = await fetch(`http://${ip}/api/v1/blockcount/${chain}`)
        }

        return data.json()
    } catch (error) {
        return error
    }
}

/**
 * @description Gets the number of transactions for a certain chain
 * @example
 * node.getTransactionCount('127.0.0.1', true, "0x3i4ihuhv9uh349u...")
 * .then(state => console.log(JSON.stringify(state)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 * @param {String} chain The chain to get the transaction count for
 */
export async function getTransactionCount(ip, https, chain) {
    let data

    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/transactioncount/${chain}`)
        } else {
            data = await fetch(`http://${ip}/api/v1/transactioncount/${chain}`)
        }

        return data.json()
    } catch (error) {
        return error
    }
}

/**
 * @description Gets the balance of a certain chain
 * @example
 * node.getBalance('127.0.0.1', true, "0x3i4ihuhv9uh349u...")
 * .then(state => console.log(JSON.stringify(state)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 * @param {String} chain The chain to get the balance of
 */
export async function getBalance(ip, https, chain) {
    let data

    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/balance/${chain}`)
        } else {
            data = await fetch(`http://${ip}/api/v1/balance/${chain}`)
        }

        return data.json()
    } catch (error) {
        return error
    }
}

/**
 * @description Gets block at of a certain chain at a certain height
 * @example
 * node.getBalance('127.0.0.1', true, "0x3i4ihuhv9uh349u...", 100)
 * .then(state => console.log(JSON.stringify(state)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 * @param {String} chain The chain to get the balance of
 * @param {Number} height The height of the block
 */
export async function getBlockAtHeight(ip, https, chain, height) {
    let data
    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/hash_at_height/${chain}/${height}`)
        } else {
            data = await fetch(`http://${ip}/api/v1/hash_at_height/${chain}/${height}`)
        }

        return data.json()
    } catch (error) {
        return error
    }
}

/**
 * @description Gets all usernames known to a node
 * @example
 * users.getUsernames('127.0.0.1', true)
 * .then(users => console.log(JSON.stringify(users)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 */
export async function getUsernames(ip, https) {
    let data

    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/usernames`)
        } else {
            data = await fetch(`http://${ip}/api/v1/usernames`)
        }

        return data.json()
    } catch (error) {
        return error
    }
}

/**
 * @description Gets the publickey of a username
 * @example
 * users.getUsernames('127.0.0.1', true)
 * .then(users => console.log(JSON.stringify(users)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 * @param {String} username The username to get the publickey of
 */
export async function getPublickeyForUsername(ip, https, username) {
    let data

    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/publickey_for_username/${username}`)
        } else {
            data = await fetch(`http://${ip}/api/v1/publickey_for_username/${username}`)
        }

        return data.json()
    } catch (error) {
        return error
    }
}

/**
 * @description Gets the username for a given publickey
 * @example
 * users.getUsernames('127.0.0.1', true)
 * .then(users => console.log(JSON.stringify(users)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 * @param {String} publickey The publickey to get the username of
 */
export async function getUsernameForPublickey(ip, https, publickey) {
    let data

    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/username_for_publickey/${publickey}`)
        } else {
            data = await fetch(`http://${ip}/api/v1/username_for_publickey/${publickey}`)
        }

        return data.json()
    } catch (error) {
        return error
    }
}


/**
 * @description Gets the list of chains/wallets
 * @example
 * users.getUsernames('127.0.0.1', true)
 * .then(users => console.log(JSON.stringify(users)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 */
export async function getChains(ip, https) {
    let data

    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/chainlist`)
        } else {
            data = await fetch(`http://${ip}/api/v1/chainlist`)
        }

        return data.json()
    } catch (error) {
        return error
    }
}

/**
 * @description Gets the blocks above a certain hash
 * @example
 * users.getUsernames('127.0.0.1', true)
 * .then(users => console.log(JSON.stringify(users)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 * @param {String} hash the starting hash
 * @param {String} chain the chain to get the blocks from
 * @param {Number} number the number of blocks to get
 
 */
export async function getBlocksAboveHash(ip, https, hash, chain, amount) {
    let data
    try {
        if (https) {
            data = await fetch(`https://${ip}/api/v1/blocksabovehash/${hash}/${chain}/${amount}`)
        } else {
            data = await fetch(`http://${ip}/api/v1/blocksabovehash/${hash}/${chain}/${amount}`)
        }

        return data.json()
    } catch (error) {
        return error
    }
}

/**
 * @description Sends a block to the node
 * @example
 * users.getUsernames('127.0.0.1', true)
 * .then(users => console.log(JSON.stringify(users)))
 * @param {String} ip IP of the node
 * @param {Boolean} [https=false] Use HTTPS
 * @param {String} block the block to send, as json
 */
export async function submitBlock(ip, https, block) {
    // TODO:
    return "{\"error\": \"not implemented\"}"
}

/**
 * @description Converts a publickey into an address
 * @example
 * node.publickeyToAddress('7mvH1bk7V765bX8V2j8W94WEMB8c7LxPr6jiw9bPC35k')
 * @param {String} publickey The publickey to convert
 */
export function publickeyToAddress(publickey) {
    let bytes = [0];
    for (var i = 0; i < publickey.length; ++i) {
        bytes.push(publickey.charCodeAt(i));
    }
    let hash = createHash('sha256').update(publickey).digest('hex');
    let hash_bytes = Buffer.from(hash, 'hex')
    let c = 0
    while (bytes.length != 49) {
        c += 1
        bytes.push(hash_bytes[c - 1]);
    }
    bytes.push(c);
    return encode(Buffer.from(bytes));
}

/**
 * @description Converts an address into a publickey
 * @example
 * node.addressTopublickey('19yWH4nwoLBK9bwyQW2hWJqFCyzDxGFPkNsXHLVGyaVVnpNPSc3V2pC637Fmd5W4CsE3')
 * @param {String} address The address to convert
 */
export function addressTopublickey(address) {
    let bytes = decode(address);
    if (bytes.length != 50 || bytes[0] != 0) {
        throw new Error('Invalid address, bad len or prefix (prefix: ' + bytes[0] + ', len: ' + bytes.length + ')');
    }
    let checksum_len = bytes.slice(-1)[0];

    let publickey_bytes = bytes.slice(0, -checksum_len - 1);

    /*TODO: checksum check
    let checksum = bytes.slice(-checksum_len - 1);
    let hash = createHash('sha256').update(publickey_bytes).digest('hex');
    let hash_bytes = Buffer.from(hash, 'hex')

    for (var i = 1; i < checksum_len; ++i) {
        if (checksum[i] != hash_bytes[i]) {
            throw new Error('Invalid address, bad checksum');
        }
    }*/

    let publickey = ''
    for (var i = 1; i < publickey_bytes.length; ++i) {
        publickey += String.fromCharCode(publickey_bytes[i]);
    }
    return publickey;
}
async function test() {
    let chains = await getChains("127.0.0.1:8000", false)
    for (let chain in chains.list) {
        console.log(chain)
        let blocks = await getBlocksAboveHash("127.0.0.1:8000", false, "0", chains.list[chain], 20)
        console.log(blocks)
    }
}
test()