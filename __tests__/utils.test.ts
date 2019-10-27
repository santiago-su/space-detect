import { radarImage, radarImageMatrix } from '../fixtures/radarImages';
import { createMatrix, formatInput } from '../src/utils';

describe('Format our input', () => {
  const input = radarImage;
  const weirdInput = 'abcde';
  const expected = {
    depth: 100,
    matrix: radarImageMatrix,
    nodes: 50
  };
  const formatted = formatInput(input);

  test('It should show us matrix of the radar', () => {
    expect(formatted.matrix).toEqual(expected.matrix);
  });

  test('It should tell us how many nodes this matrix has', () => {
    expect(formatted.nodes).toEqual(expected.nodes);
  });

  test('It should tell us the depth of the nodes this matrix has', () => {
    expect(formatted.depth).toEqual(expected.depth);
  });

  test('It should throw an error with weird input', () => {
    expect(() => formatInput(weirdInput)).toThrow();
  })
});

describe('Create matrix', () => {
  const input = '----\no--o\no---\n-o--\nooo-\n-ooo\n----\n----';
  const expected = [
    ['-', '-', '-', '-'],
    ['o', '-', '-', 'o'],
    ['o', '-', '-', '-'],
    ['-', 'o', '-', '-'],
    ['o', 'o', 'o', '-'],
    ['-', 'o', 'o', 'o'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-']
  ];
  const result = createMatrix(input);
  test('It should create a matrix with our input', () => {
    expect(result).toEqual(expected);
  });
});
