export interface Radar {
  nodes: number;
  depth: number;
  matrix: string[][];
}

export interface Invader {
  firstInvader?: boolean;
  secondInvader?: boolean;
  matrix: string[][];
}

export enum AllowedInput {
  SPACE = '-',
  RADAR_OBJECT_TEXTURE = 'o'
}

/**
 * Formatting input from STDIN
 * @param input - String that has:
 * Our radar image
 * @returns Radar object that has:
 * - nodes: Number of nodes in our image
 * - depth: Depth of nodes in our image
 * - matrix: Matrix containing our image
 */

export const formatInput = (input: string): Radar => {
  const lines = input.trim().split('\n');
  const nodes = lines.length;
  const depth = lines[0].length;
  const matrix = lines.map(line =>
    line.split('').map(val => {
      if ((Object as any).values(AllowedInput).includes(val)) {
        return val;
      } else {
        throw new Error(
          'What is this space?, our program only accepts "-" or "o"'
        );
      }
    })
  );
  return { nodes, depth, matrix };
};

/**
 * Creating matrix
 * @param input - String that has:
 * Our radar image information
 * @returns Array of arrays that contains:
 * - string: Defining our space either '-' or 'o'
 */

export const createMatrix = (input: string): string[][] =>
  input
    .trim()
    .split('\n')
    .map(line => line.split(''));
