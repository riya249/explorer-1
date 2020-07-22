import * as moment from 'moment';

export const toLocaleTimestamp = date => moment(moment(date).toDate());