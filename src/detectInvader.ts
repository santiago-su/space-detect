import { equals } from 'ramda';
import { Invader, Radar } from './utils';

const OBJECT = 'o';

/**
 * detectInvader function implementing a Breadth First Search algorithm.
 *
 * @param Radar - Radar information
 * @returns promise - Number of detected invaders in the radar image
 */

export const detectInvader = (
  radar: Radar,
  invader: Invader
): Promise<number> => {
  return new Promise(resolve => {
    const { nodes, depth, matrix } = radar;
    let score = 0;

    const queue: Array<{
      location: number[];
    }> = [];

    /**
     * Creates a queue of solid objects
     */
    matrix.map((node: string[], nodeIdx: number) =>
      node.forEach((depth: string, depthIdx: number) => {
        if (depth === OBJECT) {
          queue.push({ location: [nodeIdx, depthIdx] });
        }
      })
    );

    /**
     * Checks if our nodes are inside matrix boundaries
     *
     * @param a - Node index
     * @param b - Depth index
     */
    const isInsideMatrix = (a: number, b: number): boolean =>
      a >= 0 && a < nodes && b >= 0 && b < depth;

    /**
     * Iterates through our queue and compares nodes with invader nodes
     */
    while (queue.length > 0 && queue[0]) {
      const currentNode = queue[0];
      const {
        location: [currNode, currDepth]
      } = currentNode;

      // set initial position to go left two places then check if the first node of invader is equal
      // if it is then go to inital position and down to next node directly and repeat comparison
      let position = [currNode, currDepth];
      let matrixScore = 0;
      if (invader.firstInvader) {
        position = [currNode, currDepth - 2];
      }
      if (invader.secondInvader) {
        position = [currNode, currDepth - 3];
      }
      for (let i = 0; i < invader.matrix.length; i++) {
        const matrixComparison: string[] = [];
        // Reset depth
        if (invader.firstInvader) {
          position[1] = currDepth - 2;
        }
        if (invader.secondInvader) {
          position[1] = currDepth - 3;
        }

        for (let j = 0; j < invader.matrix[i].length; j++) {
          // Check that we are inside boundaries
          if (isInsideMatrix(position[0], position[1])) {
            matrixComparison.push(matrix[position[0]][position[1]]);
          }
          position[1]++;
        }
        position[0]++;
        // Compare matrix nodes to invader nodes
        if (equals(matrixComparison, invader.matrix[i])) {
          matrixScore++;
        }
        if (matrixScore === invader.matrix.length) {
          score++;
        }
      }
      queue.shift();
    }
    return resolve(score);
  });
};
