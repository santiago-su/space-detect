import { formatInput } from '../src/utils';

const radarImage = '----o--oo----o--ooo--ooo---------o---oo-o----oo---o--o---------o----o------o----------------o--o--o-\n--o-o-----oooooooo-oooooo-------o----o------ooo-o---o--o----o------o--o---ooo-----o--oo-o------o----\n--o--------oo-ooo-oo-oo-oo------------------ooooo-----o-----o------o---o--o--o-o-o------o----o-o-o--\n-------o--oooooo--o-oo-o--o-o-----oo--o-o-oo--o-oo-oo-o--------o-----o------o-ooooo---o--o--o-------\n------o---o-ooo-ooo----o------o-------o---oo-ooooo-o------o----o--------o-oo--ooo-oo-------------o-o\n-o--o-----o-o---o-ooooo-o-------o----o---------o-----o-oo-----------oo----ooooooo-ooo-oo------------\no-------------ooooo-o--o--o--o-------o--o-oo-oo-o-o-o----o-------------o--oooo--ooo-o----o-----o--o-\n--o-------------------------oo---------oo-o-o--ooo----o-----o--o--o----o--o-o-----o-o------o-o------\n-------------------o-----------------o--o---------------o--------o--oo-o-----oo-oo---o--o---o-----oo\n----------o----------o------------------o--o----o--o-o------------oo------o--o-o---o-----o----------\n------o----o-o---o-----o-o---------oo-o--------o---------------------------------o-o-o--o-----------\n---------------o-------------o-------o-------------------o-----o---------o-o-------------o-------oo-\n-o--o-------------o-o--------o--o--oo-------------o----ooo----o-------------o----------oo----o---o-o\n-o--o-------------o----oo------o--o-------o--o-----------o----o-----o--o----o--oo-----------o-------\n-o-----oo-------o------o---------------o--o----------o-----o-------o-----------o---o-o--oooooo-----o\n-o--------o-----o-----o---------oo----oo---o-----------o---o--oooo-oo--o-------o------oo--oo--o-----\n------------o-------------------o----oooo-------------oo-oo-----ooo-oo-----o-------o-oo-oooooooo---o\n-----------------------------------oooooooo---o-----o-------o--oooooo-o------------o-o-ooooooo-o----\n------------o------o-------o-------oo-oo--o--o---------o--o-o-o-ooooo-o--------------oo-o----o-oo-o-\n---o-o----------o--------oo----o----oooooooo-------o----o-o-o-o-----o-o-----o----------ooo-oo--o---o\n-o-o---------o-o---------------o--o--o--ooo---ooo-------o------oo-oo------------o--------o--o-o--o--\n-------oo---------------------------o-oo----------o------o-o-------o-----o----o-----o-oo-o-----o---o\n---o--------o-----o-------o-oo-----oo--oo-o----oo----------o--o---oo------oo----o-----o-------o-----\n---o--ooo-o---------o-o----o------------o---------o----o--o-------o-------------o----------------oo-\n---o------o----------------o----o------o------o---oo-----------o-------------o----------oo---------o\n--oo---------------o--o------o---o-----o--o-------------o------o-------o-----o-----o----o------o--o-\n-o-------o----------o-o-o-------o-----o--o-o-----------o-oo-----------o------o---------o-----o-o----\n----------o----o-------o----o--o------o------------o---o---------------oo----o-----ooo--------------\n----o--------oo----o-o----o--o------ooo----o-oooo---o--o-oo--------o-oo-----o-o---o-o--o-----oo-----\n------o--------o-ooooo----o---o--o-----o---------------o-o-------o-----o----------------------------\no-------oo----o--oooooo-o---o--o------oooo----------o-oo-------o---o----------o------oo-------------\n-o---o----------o--oo-oo-o---o-----o-o-----------------------oo--o------o------o--------------------\n-----oo-o-o-o---ooooooooo----o----o--------o--o---oo---o------------o----------o-o---o------o-o--oo-\n------o------o---ooo-o---------------------------o--o---o---o----o--o-------o-----o------o----o----o\n-------o----------ooo-o-----o----o---o--o-oo--o--o-o--o------o--o-oo---ooo------------------------o-\n-o-------o------o-o--ooo--o---o---oo-----o----o-------------o----o-ooo-o------o--o-o------o-o-------\n---oo--o---o-o---------o---o--------------o--o-----o-------o-----o--o---o-oo--------o----o----o-----\no------o----oo-o-----------oo--o---o--------o-o------o-------o-o------o-oo---------o-----oo---------\n----o--o---o-o-----------o---o------------o-------o----o--o--o--o-o---------------o-----------------\n-------oo--o-o-----o-----o----o-o--o----------------------o-------o------o----oo----ooo---------o---\no-----oo-------------------o--o-----o-----------o------o-------o----o-----------o----------------o--\n--o---o-------o------------o--------------------o----o--o-------------oo---o---------oo--------o----\n--o--------o---------o------------o------o-------o------------o-------o---o---------ooooo-----------\n------o--------------o-o-o---------o---o-------o--o-----o-------o-o----------o-----oo-ooo----------o\n--o---------------o----o--oo-------------o---------o-------------------oo---------oo-o-ooo----------\n-o-----------o------ooo----o----------------ooo-----o--------o--o---o-----------o-o-oooooo--------oo\n-o---o-------o---o-oooo-----o-------------------o----oo-----------------o--o--------o--o------o--o--\n-------o---o------oooooo--o----ooo--o--------o-------o----------------------------oo-oo-o--o--------\no--oo------o-----oo--o-oo------------oo--o------o--o-------------oo----o------------oooo-o------oo--\n-----o----------ooooooooo--------------oo--------------oo-----o-----o-o--o------o----------o----o---';
const radarImageMatrix = [ [ '----o--oo----o--ooo--ooo---------o---oo-o----oo---o--o---------o----o------o----------------o--o--o-' ],
[ '--o-o-----oooooooo-oooooo-------o----o------ooo-o---o--o----o------o--o---ooo-----o--oo-o------o----' ],
[ '--o--------oo-ooo-oo-oo-oo------------------ooooo-----o-----o------o---o--o--o-o-o------o----o-o-o--' ],
[ '-------o--oooooo--o-oo-o--o-o-----oo--o-o-oo--o-oo-oo-o--------o-----o------o-ooooo---o--o--o-------' ],
[ '------o---o-ooo-ooo----o------o-------o---oo-ooooo-o------o----o--------o-oo--ooo-oo-------------o-o' ],
[ '-o--o-----o-o---o-ooooo-o-------o----o---------o-----o-oo-----------oo----ooooooo-ooo-oo------------' ],
[ 'o-------------ooooo-o--o--o--o-------o--o-oo-oo-o-o-o----o-------------o--oooo--ooo-o----o-----o--o-' ],
[ '--o-------------------------oo---------oo-o-o--ooo----o-----o--o--o----o--o-o-----o-o------o-o------' ],
[ '-------------------o-----------------o--o---------------o--------o--oo-o-----oo-oo---o--o---o-----oo' ],
[ '----------o----------o------------------o--o----o--o-o------------oo------o--o-o---o-----o----------' ],
[ '------o----o-o---o-----o-o---------oo-o--------o---------------------------------o-o-o--o-----------' ],
[ '---------------o-------------o-------o-------------------o-----o---------o-o-------------o-------oo-' ],
[ '-o--o-------------o-o--------o--o--oo-------------o----ooo----o-------------o----------oo----o---o-o' ],
[ '-o--o-------------o----oo------o--o-------o--o-----------o----o-----o--o----o--oo-----------o-------' ],
[ '-o-----oo-------o------o---------------o--o----------o-----o-------o-----------o---o-o--oooooo-----o' ],
[ '-o--------o-----o-----o---------oo----oo---o-----------o---o--oooo-oo--o-------o------oo--oo--o-----' ],
[ '------------o-------------------o----oooo-------------oo-oo-----ooo-oo-----o-------o-oo-oooooooo---o' ],
[ '-----------------------------------oooooooo---o-----o-------o--oooooo-o------------o-o-ooooooo-o----' ],
[ '------------o------o-------o-------oo-oo--o--o---------o--o-o-o-ooooo-o--------------oo-o----o-oo-o-' ],
[ '---o-o----------o--------oo----o----oooooooo-------o----o-o-o-o-----o-o-----o----------ooo-oo--o---o' ],
[ '-o-o---------o-o---------------o--o--o--ooo---ooo-------o------oo-oo------------o--------o--o-o--o--' ],
[ '-------oo---------------------------o-oo----------o------o-o-------o-----o----o-----o-oo-o-----o---o' ],
[ '---o--------o-----o-------o-oo-----oo--oo-o----oo----------o--o---oo------oo----o-----o-------o-----' ],
[ '---o--ooo-o---------o-o----o------------o---------o----o--o-------o-------------o----------------oo-' ],
[ '---o------o----------------o----o------o------o---oo-----------o-------------o----------oo---------o' ],
[ '--oo---------------o--o------o---o-----o--o-------------o------o-------o-----o-----o----o------o--o-' ],
[ '-o-------o----------o-o-o-------o-----o--o-o-----------o-oo-----------o------o---------o-----o-o----' ],
[ '----------o----o-------o----o--o------o------------o---o---------------oo----o-----ooo--------------' ],
[ '----o--------oo----o-o----o--o------ooo----o-oooo---o--o-oo--------o-oo-----o-o---o-o--o-----oo-----' ],
[ '------o--------o-ooooo----o---o--o-----o---------------o-o-------o-----o----------------------------' ],
[ 'o-------oo----o--oooooo-o---o--o------oooo----------o-oo-------o---o----------o------oo-------------' ],
[ '-o---o----------o--oo-oo-o---o-----o-o-----------------------oo--o------o------o--------------------' ],
[ '-----oo-o-o-o---ooooooooo----o----o--------o--o---oo---o------------o----------o-o---o------o-o--oo-' ],
[ '------o------o---ooo-o---------------------------o--o---o---o----o--o-------o-----o------o----o----o' ],
[ '-------o----------ooo-o-----o----o---o--o-oo--o--o-o--o------o--o-oo---ooo------------------------o-' ],
[ '-o-------o------o-o--ooo--o---o---oo-----o----o-------------o----o-ooo-o------o--o-o------o-o-------' ],
[ '---oo--o---o-o---------o---o--------------o--o-----o-------o-----o--o---o-oo--------o----o----o-----' ],
[ 'o------o----oo-o-----------oo--o---o--------o-o------o-------o-o------o-oo---------o-----oo---------' ],
[ '----o--o---o-o-----------o---o------------o-------o----o--o--o--o-o---------------o-----------------' ],
[ '-------oo--o-o-----o-----o----o-o--o----------------------o-------o------o----oo----ooo---------o---' ],
[ 'o-----oo-------------------o--o-----o-----------o------o-------o----o-----------o----------------o--' ],
[ '--o---o-------o------------o--------------------o----o--o-------------oo---o---------oo--------o----' ],
[ '--o--------o---------o------------o------o-------o------------o-------o---o---------ooooo-----------' ],
[ '------o--------------o-o-o---------o---o-------o--o-----o-------o-o----------o-----oo-ooo----------o' ],
[ '--o---------------o----o--oo-------------o---------o-------------------oo---------oo-o-ooo----------' ],
[ '-o-----------o------ooo----o----------------ooo-----o--------o--o---o-----------o-o-oooooo--------oo' ],
[ '-o---o-------o---o-oooo-----o-------------------o----oo-----------------o--o--------o--o------o--o--' ],
[ '-------o---o------oooooo--o----ooo--o--------o-------o----------------------------oo-oo-o--o--------' ],
[ 'o--oo------o-----oo--o-oo------------oo--o------o--o-------------oo----o------------oooo-o------oo--' ],
[ '-----o----------ooooooooo--------------oo--------------oo-----o-----o-o--o------o----------o----o---' ] ];


describe('Format our input', () => {
  const input = radarImage;
  const expected = {
    'matrix': radarImageMatrix,
    'nodes': 50,
    'depth': 100
  };
  const formatted = formatInput(input);

  test('It should show us matrix of the radar', () => {
    expect(formatted.matrix).toEqual(expected.matrix);
  })

  test('It should tell us how many nodes this matrix has', () => {
    expect(formatted.nodes).toEqual(expected.nodes);
  })

  test('It should tell us the depth of the nodes this matrix has', () => {
    expect(formatted.depth).toEqual(expected.depth);
  })
});
