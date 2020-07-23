import * as moment from 'moment';

export const toLocaleTimestamp = date => moment(moment(date).toDate());

export const lessDecimals = (string, decimals = 2) => {
  window.isOnProduction || console.log('lessDecimals of', string);
  if(!string) return window.isOnProduction || console.log('string empty', string), string;
  let lessDecimals = string.split('.');
  if(lessDecimals[1]&&lessDecimals[1].length >= decimals) {
    lessDecimals[1] = lessDecimals[1].slice(0, decimals);
  }
  return lessDecimals.join('.');
}

export const moreDecimals = (string, decimals = 8) => {
  if(!string) return string;
  let lessDecimals = string.split('.');
  if(lessDecimals[1].length <= decimals) {
    lessDecimals[1] += '0'.repeat(decimals - lessDecimals[1].length);
  }
  return lessDecimals.join('.');
}