export interface Radar {
  nodes: number;
  depth: number;
  matrix: string[][];
}

export interface Invader {
  firstInvader?: Boolean;
  secondInvader?: Boolean;
  matrix: string[][];
}

/**
 * Formatting input from STDIN
 * @param input - String that has:
 * Our radar image
 * @returns Object that has:
 * - nodes: Number of nodes in our image
 * - depth: Depth of nodes in our image
 * - matrix: Matrix containing our image
 */

export const formatInput = (input: string) => {
  const allowedInput = ['-', 'o'];
  const lines = input.trim().split('\n');
  const nodes = lines.length;
  const depth = lines[0].length;
  const matrix = lines.map(line => line.split('').map(val => {
    if(!allowedInput.includes(val)) {
      throw new Error('What is this space?, our program only accepts "-" or "o"');
    } else {
      return val
    }
  }));
  return { nodes, depth, matrix };
};

/**
 * Creating matrix
 * @param input - String that has:
 * Our radar image information
 * @returns Array of arrays that contains:
 * - string: Defining our space either '-' or 'o'
 */

export const createMatrix = (input: string) =>
  input
    .trim()
    .split('\n')
    .map(line => line.split(''));
