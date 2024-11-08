import { beforeEach, describe, expect, it } from 'vitest';
import { PlayerPoints } from '../main';

describe('PlayerPoints', () => {
  let playerPoints;
  beforeEach(() => {
    playerPoints = new PlayerPoints();
  });

  it('should have more 50 points', () => {
    const currentPoints = 49;
    const points = playerPoints.calcularPontosTotais(currentPoints, 3);

    expect(points).toBe(currentPoints + 50);
  });

  it('should triplicate the points', () => {
    const currentPoints = 100;
    const points = playerPoints.calcularPontosTotais(currentPoints, 4);

    expect(points).toBe(currentPoints * 3);
  });

  it('should have more 30 points', () => {
    const currentPoints = 50;
    const points = playerPoints.calcularPontosTotais(currentPoints, 2);

    expect(points).toBe(currentPoints + 30);
  });
});
