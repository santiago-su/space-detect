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

export const formatInput = (input: string) => {
  const lines = input.trim().split('\n');
  const nodes = lines.length;
  const depth = lines[0].length;
  const matrix = lines.map(line => line.split(''));
  return { nodes, depth, matrix };
};

export const createMatrix = (input: string) =>
  input
    .trim()
    .split('\n')
    .map(line => line.split(''));
