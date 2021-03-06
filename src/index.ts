import { sum } from 'ramda';
import {
  firstInvaderMatrix,
  secondInvaderMatrix
} from './../fixtures/invaders';
import { detectInvader } from './detectInvader';
import { formatInput } from './utils';

process.stdin.setEncoding('utf8');

let radarImage: string = '';

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    if (chunk === 'end\n') {
      process.stdin.emit('end');
    }
    radarImage += chunk;
  }
});

process.stdin.on('end', () => {
  const input = formatInput(radarImage);
  Promise.all([
    detectInvader(input, { firstInvader: true, matrix: firstInvaderMatrix }),
    detectInvader(input, { secondInvader: true, matrix: secondInvaderMatrix })
  ]).then(scores => {
    const res = sum(scores);
    process.stdout.write(`There are ${res} space invaders! Watch out!`);
  });
});
