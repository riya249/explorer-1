module.exports = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  nodeUrl: process.env.REACT_APP_NODE_URL,
  nrtAddress:
    process.env.REACT_APP_NRT_ADDRESS ||
    '0xeDFE8546EF64e5237D41b4A34436781Bb62C963b',
  timeAllyAddress:
    process.env.REACT_APP_TIMEALLY_ADDRESS ||
    '0x016fa071711e32222B3bEf51E24af64DcE7973D7',
   validatorsStakesAddress: process.env.REACT_APP_VALIDATORS_STAKES_ADDRESS ||
    '0xF5D629AAb8d5417285d549dD879Cf9AeE0eC2337',
    reversePlasmaAddress: process.env.REACT_APP_REVERSE_PLASMA_ADDRESS || '0x3bEb087e33eC0B830325991A32E3F8bb16A51317',
    plasmaAddress: process.env.REACT_APP_PLASMA_ADDRESS || '0x5712D38aD8D357c794027b3a1a6481E399F1BaF4'
};
