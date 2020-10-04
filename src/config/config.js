const { es } = require('eraswap-sdk/dist');
const { providerESN } = require('../ethereum/Provider');

module.exports = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  nodeUrl: process.env.REACT_APP_NODE_URL,
  nrtAddress: es.addresses[process.env.NODE_ENV].ESN.nrtManager,
  timeAllyAddress: es.addresses[process.env.NODE_ENV].ESN.timeallyManager,
  validatorsStakesAddress: es.addresses[process.env.NODE_ENV].ESN.validatorManager,
  reversePlasmaAddress: es.addresses[process.env.NODE_ENV].ESN.reversePlasma,
  plasmaAddress: es.addresses[process.env.NODE_ENV].ETH.plasmaManager,
};
