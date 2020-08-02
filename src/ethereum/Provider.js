const { ethers } = require('ethers');
const { nodeUrl } = require('../config/config');

const providerESN = new ethers.providers.JsonRpcProvider(
  nodeUrl || 'https://node2.testnet.eraswap.network'
);

const providerEth = ethers.getDefaultProvider('rinkeby', {
  infura: 'b915fe11a8ab4e73a3edba4c59d656b2',
});

module.exports = {
	providerEth,
	providerESN
}

