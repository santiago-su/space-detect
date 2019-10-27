import { firstInvaderMatrix } from '../fixtures/invaders';
import {
  radarImageMatrix,
  radarImageWithSecondInvaderMatrix,
  radarWithFirstInvaderMatrix,
  simpleRadarMatrix
} from '../fixtures/radarImages';
import { detectInvader } from '../src/detectInvader';
import { Radar } from './../src/utils';

describe('It should detect the first invader', () => {
  const inputWithNoInvaders: Radar = {
    depth: 100,
    matrix: radarImageMatrix,
    nodes: 50
  };
  const inputWithFirstInvader: Radar = {
    depth: 17,
    matrix: simpleRadarMatrix,
    nodes: 8
  };
  const inputWithTwoInvaders: Radar = {
    depth: 100,
    matrix: radarWithFirstInvaderMatrix,
    nodes: 50
  };

  const inputWithSecondInvader: Radar = {
    depth: 100,
    matrix: radarImageWithSecondInvaderMatrix,
    nodes: 50
  };

  test('It should detect that there are no invaders', async () => {
    const result = await detectInvader(inputWithNoInvaders, {
      firstInvader: true,
      matrix: firstInvaderMatrix
    });
    expect(result).toEqual(0);
  });

  test('It should detect that there is one invader', async () => {
    const resultTwo = await detectInvader(inputWithFirstInvader, {
      firstInvader: true,
      matrix: firstInvaderMatrix
    });
    expect(resultTwo).toEqual(1);
  });

  test('It should detect that there are two invaders', async () => {
    const resultThree = await detectInvader(inputWithTwoInvaders, {
      firstInvader: true,
      matrix: firstInvaderMatrix
    });
    expect(resultThree).toEqual(2);
  });

  test('It should detect that there are two invaders of the second type', async () => {
    const resultThree = await detectInvader(inputWithTwoInvaders, {
      secondInvader: true,
      matrix: firstInvaderMatrix
    });
    expect(resultThree).toEqual(2);
  });
});
