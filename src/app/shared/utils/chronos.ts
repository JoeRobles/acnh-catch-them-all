import * as moment from 'moment';
import * as  Helpers from './helpers';

export function dateToStringTimeSeconds(date: Date): string {
  if (Helpers.isValidDate(date)) {
    return moment(date).format('HH:mm:ss');
  } else {
    return '';
  }
}

export function daysUntilDate(today: Date, months: number): number {
  const currentDate = moment(today);
  const futureMonth = moment(currentDate).add(months, 'M');
  const futureMonthEnd = moment(futureMonth).endOf('month');

  return futureMonthEnd.diff(currentDate, 'days');
}
export function isStartOfMonth(today: Date) {
  // @TODO: implement
  let test = new Date(today.getTime()), month = test.getMonth();
  test.setDate(test.getDate() - 1);
  return test.getMonth() !== month;
}
export function isEndOfMonth(today: Date): boolean {
  let test = new Date(today.getTime()), month = test.getMonth();
  test.setDate(test.getDate() + 1);

  return test.getMonth() !== month;
}
