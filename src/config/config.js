module.exports = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  nodeUrl: process.env.REACT_APP_NODE_URL,
  nrtAddress:
    process.env.REACT_APP_NRT_ADDRESS ||
    '0xcA4d0578c5e07F0964C7E7ccc87E606A234625b8',
  timeAllyAddress:
    process.env.REACT_APP_TIMEALLY_ADDRESS ||
    '0x89309551Fb7AbaaB85867ACa60404CDA649751d4',
  validatorsStakesAddress:
    process.env.REACT_APP_VALIDATORS_STAKES_ADDRESS ||
    '0x8418249278d74D46014683A8029Fd6fbC88482a1',
  reversePlasmaAddress:
    process.env.REACT_APP_REVERSE_PLASMA_ADDRESS ||
    '0x3bEb087e33eC0B830325991A32E3F8bb16A51317',
  plasmaAddress:
    process.env.REACT_APP_PLASMA_ADDRESS ||
    '0x1da7f478683206820DE9C9c76882F93A725A39F2',
};
