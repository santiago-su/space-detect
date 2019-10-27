import { firstInvaderMatrix, secondInvaderMatrix } from '../fixtures/invaders';
import {
  radarImageMatrix,
  radarImageWithSecondInvaderMatrix,
  radarWithFirstInvaderMatrix,
  simpleRadarMatrix,
  simpleRadarSecondInvaderMatrix,
  radarImageWithBothInvadersMatrix
} from '../fixtures/radarImages';
import { detectInvader } from '../src/detectInvader';
import { Radar } from './../src/utils';

describe('It should detect invaders', () => {
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

  const inputWithSecondInvaderSimple: Radar = {
    depth: 11,
    matrix: simpleRadarSecondInvaderMatrix,
    nodes: 8
  }

  const inputWithBothInvaders: Radar = {
    depth: 100,
    matrix: radarImageWithBothInvadersMatrix,
    nodes: 50
  }

  test('It should detect that there are no invaders', async () => {
    const result = await detectInvader(inputWithNoInvaders, {
      firstInvader: true,
      matrix: firstInvaderMatrix
    });
    expect(result).toEqual(0);
  });

  test('It should detect that there is one invader of the first type', async () => {
    const result = await detectInvader(inputWithFirstInvader, {
      firstInvader: true,
      matrix: firstInvaderMatrix
    });
    expect(result).toEqual(1);
  });

  test('It should detect that there are two invaders of the first type', async () => {
    const result = await detectInvader(inputWithTwoInvaders, {
      firstInvader: true,
      matrix: firstInvaderMatrix
    });
    expect(result).toEqual(2);
  });

  test('It should detect that there is one invader of the second type', async () => {
    const result = await detectInvader(inputWithSecondInvaderSimple, {
      secondInvader: true,
      matrix: secondInvaderMatrix
    });
    expect(result).toEqual(1);
  });

  test('It should detect that there are two invaders of the second type', async () => {
    const result = await detectInvader(inputWithSecondInvader, {
      secondInvader: true,
      matrix: secondInvaderMatrix
    });
    expect(result).toEqual(2);
  });

  test('It should detect that there are all types of invaders', async () => {
    const resultOne = await detectInvader(inputWithBothInvaders, {
      firstInvader: true,
      matrix: firstInvaderMatrix
    });
    expect(resultOne).toEqual(2);
    const resultTwo = await detectInvader(inputWithBothInvaders, {
      secondInvader: true,
      matrix: secondInvaderMatrix
    });
    expect(resultTwo).toEqual(3);
  });
});
