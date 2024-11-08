import { beforeEach, describe, expect, it } from 'vitest';
import { ChocolateBars } from '../main';

describe('ChocolateBar', () => {
  let chocolateBar;

  beforeEach(() => {
    chocolateBar = new ChocolateBars();
  });

  it('should have only small bars', () => {
    const result = chocolateBar.calculate(4, 2, 3);

    expect(result).toBe(3);
  });

  it('should have only big bars', () => {
    const result = chocolateBar.calculate(5, 3, 10);

    expect(result).toBe(0);
  });

  it('should have small and big bars', () => {
    const result = chocolateBar.calculate(5, 3, 17);

    expect(result).toBe(2);
  });

  it('should not have enough bars', () => {
    const result = chocolateBar.calculate(1, 1, 10);

    expect(result).toBe(-1);
  });

  it('should not have enough bars', () => {
    const result = chocolateBar.calculate(-1, -1, -1);

    expect(result).toBe(-1);
  });
});
