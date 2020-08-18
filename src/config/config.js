module.exports = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  nodeUrl: process.env.REACT_APP_NODE_URL,
  nrtAddress:
    process.env.REACT_APP_NRT_ADDRESS ||
    '0xd434fCAb3aBd4C91DE8564191c3b2DCDcdD33E37',
  timeAllyAddress: 
    process.env.REACT_APP_TIMEALLY_ADDRESS ||
    '0x21E8E3fB904d414047C9ED7Df5F67Bf0EeCCE7D3',
  validatorsStakesAddress:
    process.env.REACT_APP_VALIDATORS_STAKES_ADDRESS ||
    '0x8418249278d74D46014683A8029Fd6fbC88482a1',
  reversePlasmaAddress:
    process.env.REACT_APP_REVERSE_PLASMA_ADDRESS ||
    '0x3bEb087e33eC0B830325991A32E3F8bb16A51317',
  plasmaAddress:
    process.env.REACT_APP_PLASMA_ADDRESS ||
    '0x0052B851bf8F7A808EfD467D45ED849f8B043603',
};
