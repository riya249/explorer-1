import * as moment from 'moment';
import { ethers } from 'ethers';

export const toLocaleTimestamp = (date) => moment(moment(date).toDate());

export const lessDecimals = (string, decimals = 2) => {
  window.isOnProduction || console.log('lessDecimals of', string);
  if (!string)
    return window.isOnProduction || console.log('string empty', string), string;
  let lessDecimals = string.split('.');
  if (lessDecimals[1] && lessDecimals[1].length >= decimals) {
    lessDecimals[1] = lessDecimals[1].slice(0, decimals);
  }
  return lessDecimals.join('.');
};

export const moreDecimals = (string, decimals = 8) => {
  if (!string) return string;
  let lessDecimals = string.split('.');
  if (lessDecimals[1].length <= decimals) {
    lessDecimals[1] += '0'.repeat(decimals - lessDecimals[1].length);
  }
  return lessDecimals.join('.');
};

export const nFormatter = (num, digits = 0) => {
  var si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
};

export const formatEther = (hexValue) =>
  Number(ethers.utils.formatEther(hexValue)).toFixed('2');
