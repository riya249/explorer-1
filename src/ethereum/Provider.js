const { ethers } = require('ethers');
const { nodeUrl } = require('../config/config');
const { es } = require('eraswap-sdk');

export const providerESN = new es.CustomProvider('testnet');
// const providerESN = new ethers.providers.JsonRpcProvider('https://node2.testnet.eraswap.network');

export const providerEth = ethers.getDefaultProvider('rinkeby', {
  infura: 'b915fe11a8ab4e73a3edba4c59d656b2',
});

export const surveyInstance = es.typechain.ESN.BuildSurveyFactory.connect(es.addresses[process.env.REACT_APP_NODE_ENV].ESN.buildSurvey,providerESN);

// module.exports = {
//   providerEth,
//   providerESN,
//   surveyInstance,
// };
