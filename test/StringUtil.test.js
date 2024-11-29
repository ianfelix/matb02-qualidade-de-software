import { beforeEach, describe, expect, it } from 'vitest';
import { StringUtil } from '../main';

describe('StringUtil', () => {
  let stringUtil;

  beforeEach(() => {
    stringUtil = new StringUtil();
  });

  it('should return null', () => {
    expect(
      stringUtil.substringsBetween(null, 'asdfadf', 'asdfasdfasdffdsf')
    ).toBeNull();
    expect(stringUtil.substringsBetween('abcabcabcd', null, 'c')).toBeNull();
    expect(stringUtil.substringsBetween('abcabcabcd', 'ab', null)).toBeNull();
    expect(stringUtil.substringsBetween('abcabcabcd', 'e', 'f')).toBeNull();
    expect(stringUtil.substringsBetween('abcabcabcd', '', 'f')).toBeNull();
    expect(stringUtil.substringsBetween('abcabcabcd', 'e', '')).toBeNull();
  });

  it('should return an empty string', () => {
    expect(stringUtil.substringsBetween('', 'a', 'd')).toEqual([]);
    expect(stringUtil.substringsBetween('', 'aa', 'dd')).toEqual([]);
  });

  it('should return a substring array', () => {
    expect(stringUtil.substringsBetween('axcaycazc', 'a', 'c')).toEqual([
      'x',
      'y',
      'z',
    ]);
    expect(stringUtil.substringsBetween('aaxccaaycaazcc', 'aa', 'c')).toEqual([
      'x',
      'y',
      'z',
    ]);
  });
});
