const { ethers } = require('ethers');
const { nodeUrl } = require('../config/config');

module.exports = new ethers.providers.JsonRpcProvider(
  nodeUrl || 'https://node2.testnet.eraswap.network'
);
