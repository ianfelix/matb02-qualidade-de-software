import { beforeEach, describe, expect, it } from 'vitest';
import { LeapYear } from '../main';

describe('LeapYear', () => {
  let leapYear;

  beforeEach(() => {
    leapYear = new LeapYear();
  });

  it('it should return false if the year is not divisible for 4', () => {
    expect(leapYear.isLeapYear(2015)).toBeFalsy();
  });

  it('it should return true if the year is divisible for 4 and not for 100', () => {
    expect(leapYear.isLeapYear(2016)).toBeTruthy();
  });

  it('it should return true if the year is divisible for 4, 100 and not for 400', () => {
    expect(leapYear.isLeapYear(2000)).toBeTruthy();
  });
});
