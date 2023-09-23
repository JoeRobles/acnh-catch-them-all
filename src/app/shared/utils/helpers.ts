import { SongModel } from '../../acnhapi/song/models/song.model';
import { daysUntilDate, isEndOfMonth as IsEndOfMonth, isStartOfMonth as IsStartOfMonth } from './chronos';

export function toFiveRows(items: any[]): any[][] {
  let column: any[] = [[], [], [], [], []];
  const rows = 5;
  for (let i = 0; i < items.length; i += rows) {
    const chunk = items.slice(i, i + rows);
    column[0].push(chunk[0]);
    column[1].push(chunk[1]);
    column[2].push(chunk[2]);
    column[3].push(chunk[3]);
    column[4].push(chunk[4]);
  }
  return column;
}
export function toFiveColumns(items: any[]): any[][] {
  const rowsAmount = 5;
  let rows: SongModel[][] = [] as SongModel[][];
  for (let i = 0; i < items.length; i += rowsAmount) {
    let columns: SongModel[] = [] as SongModel[];
    const chunk = items.slice(i, i + rowsAmount);
    columns.push(chunk[0]);
    columns.push(chunk[1]);
    columns.push(chunk[2]);
    columns.push(chunk[3]);
    columns.push(chunk[4]);
    rows.push(columns);
  }
  return rows;
}
export function toTenColumns(items: any[]): any[][] {
  const rowsAmount = 10;
  let rows: SongModel[][] = [] as SongModel[][];
  for (let i = 0; i < items.length; i += rowsAmount) {
    let columns: SongModel[] = [] as SongModel[];
    const chunk = items.slice(i, i + rowsAmount);
    columns.push(chunk[0]);
    columns.push(chunk[1]);
    columns.push(chunk[2]);
    columns.push(chunk[3]);
    columns.push(chunk[4]);
    columns.push(chunk[5]);
    columns.push(chunk[6]);
    columns.push(chunk[7]);
    columns.push(chunk[8]);
    columns.push(chunk[9]);
    rows.push(columns);
  }
  return rows;
}
export function isValidDate(date: Date): boolean {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    // it is a date
    return !isNaN(date.getTime());
  } else {
    return false;
  }
}
export function capitalize(phrase: string): string {
  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}
export function hoursLeft(available: number[], current: number): number {
  const limit = available.length - 1;
  if (current > available[0]) {
    if (current > available[limit]) { // /---/ |    /
      return 23 - current + available[0];
    } else { // /---/ | /---/
      for (let i = limit; i === 0; --i) {
        if (current < available[i]) {
          return available[i + 1] - current;
        }
      }
    }
  } else { // /    | /---/
    return available[0] - current;
  }
  return 0;
}
export function remainingHours(available: number[], current: number): number {
  const limit = available.length - 1;
  let times = 0;

  for (let i = available.indexOf(current); i < limit; ++i) {
    const diff = available[i + 1] - available[i];
    if (diff === 1) {
      times++;
    } else {
      if (available[i] === 23) { //@TODO: if available AND is last day of available month
        times++;
      } else {
        break;
      }
    }
  }

  return times;
}
export function remainingDays(today: Date, available: number[], current: number): number {
  const limit = available.length - 1;
  let times = 0;

  for (let i = available.indexOf(current); i < limit; ++i) {
    const diff = available[i + 1] - available[i];
    if (diff === 1) {
      times++;
    } else {
      if (available[i] === 12) {
        times++;
      } else {
        break;
      }
    }
  }

  return daysUntilDate(today, times);
}
export function remainingMinutes(minutes: number): string {
  const remain = 60 - minutes;
  if (remain < 10) {
    return '0' + remain;
  } else {
    return String(remain);
  }
}
export function isStartOfMonth(today: Date): boolean {
  return IsStartOfMonth(today);
}
export function isEndOfMonth(today: Date): boolean {
  return IsEndOfMonth(today);
}
export function encodedStr(rawStr: string): string {
  return rawStr.replaceAll("'", "");
}
export function ascByNumber(a: SongModel, b: SongModel) {
  if ( a.number < b.number ){
    return -1;
  }
  if ( a.number > b.number ){
    return 1;
  }
  return 0;
}
