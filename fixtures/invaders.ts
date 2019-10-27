export const firstInvader =
  '--o-----o--\n---o---o---\n--ooooooo--\n-oo-ooo-oo-\nooooooooooo\no-ooooooo-o\no-o-----o-o\n---oo-oo---';
export const firstInvaderMatrix = firstInvader
  .split('\n')
  .map(node => node.split(''));

export const secondInvader =
  '---oo---\n--oooo--\n-oooooo-\noo-oo-oo\noooooooo\n--o--o--\n-o-oo-o-\no-o--o-o';
export const secondInvaderMatrix = secondInvader
  .split('\n')
  .map(node => node.split(''));
