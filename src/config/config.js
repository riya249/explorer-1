module.exports = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  nodeUrl: process.env.REACT_APP_NODE_URL,
  nrtAddress:
    process.env.REACT_APP_NRT_ADDRESS ||
    '0x332c509103798b58E9f70C133493013Edf1A21aA',
  timeAllyAddress:
    process.env.REACT_APP_TIMEALLY_ADDRESS ||
    '0x3A7814a61A5907E8cb66D970ab8590b424b75a9d',
  validatorsStakesAddress:
    process.env.REACT_APP_VALIDATORS_STAKES_ADDRESS ||
    '0xcbA64449f6D2294447DF29827Bc2EA13ba46fC07',
  reversePlasmaAddress:
    process.env.REACT_APP_REVERSE_PLASMA_ADDRESS ||
    '0x3bEb087e33eC0B830325991A32E3F8bb16A51317',
  plasmaAddress:
    process.env.REACT_APP_PLASMA_ADDRESS ||
    '0x6dbDABf2962cF4da9e5568b89D45ce1825a479AE',
};
