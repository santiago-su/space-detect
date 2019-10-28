[![codecov](https://codecov.io/gh/santiago-su/space-detect/branch/master/graph/badge.svg?token=FjFUYL1maB)](https://codecov.io/gh/santiago-su/space-detect)
[![CircleCI](https://circleci.com/gh/santiago-su/space-detect.svg?style=svg)](https://circleci.com/gh/santiago-su/space-detect)

# Space detect

There is a radar image with some space invaders in them, this program should detect them before they get to the planet. This are the space invaders that we know:
~~~~
--o-----o--
---o---o---
--ooooooo--
-oo-ooo-oo-
ooooooooooo
o-ooooooo-o
o-o-----o-o
---oo-oo---
~~~~

~~~~
---oo---
--oooo--
-oooooo-
oo-oo-oo
oooooooo
--o--o--
-o-oo-o-
o-o--o-o
~~~~

#### Challenge
- Detect how many space invaders are on our radar image.

#### Installation
Before running this you need to have installed.
- [Node](https://nodejs.org/en/): 12.13.0
- [NPM](https://nodejs.org/en/): 6.12.0

Clone the repo
```bash
git clone https://github.com/santiago-su/space-detect.git
```
Install dependencies
```bash
npm install
```

#### Usage
1. Build project with `npm run build`.
2. Run project with `npm start`.
3. Put your input on terminal.
4. Hit enter and type `end` on a newline and hit enter key again to emit an end event and process input.
5. See your output on terminal.

#### Tests
Run `npm test`

#### Solution
First of all we parse our stdin input to create the data structure that we need for implementing our algorithm. Our data structure looks like this.
```js
{
  'nodes': 8,
  'depth': 4,
  'matrix': [
    ['-', '-', '-', '-'],
    ['o', '-', '-', 'o'],
    ['o', '-', '-', '-'],
    ['-', 'o', '-', '-'],
    ['o', 'o', 'o', '-'],
    ['-', 'o', 'o', 'o'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-']
  ]
}
```

Then we apply our [BFS algorithm](https://en.wikipedia.org/wiki/Breadth-first_search) to each of our matrices. First we create a queue with our "objects", that means we separate between "space" and "object" in our radar, we specify the location of our queue.

Then for each of our objects in the queue we get it's position, we travel back `x` num of depth where our `x` is the first depth of the first node of our invader matrix:
~~~~
      |
      v
----> --o-----o--
      ---o---o---
      --ooooooo--
      -oo-ooo-oo-
      ooooooooooo
      o-ooooooo-o
      o-o-----o-o
      ---oo-oo---
~~~~

In the example above we would travel two positions back from our first queue object `o`.
We would then proceed to compare our matrix in this position to our space invader matrix.
If it's a hit, we would move down to the next node:
~~~~
      --o-----o--
----> ---o---o---
      --ooooooo--
      -oo-ooo-oo-
      ooooooooooo
      o-ooooooo-o
      o-o-----o-o
      ---oo-oo---
~~~~

And start comparing from there, and so on, until the end of our queue.
We would store a score if we have a full match with our invader matrix.

At the end we give back the score and our program finishes.
We run our program in parallel getting one score for each of our space invaders, so we compare them in separate instances and at the end sum our result score and give it back on our STDOUT.

#### Drawbacks

- We don't consider just the space invaders, but the space invaders and the small amount of "space"
objects around them, this could mean that there might be some space invaders on top of one another
or something similar.
- We might be looking at a space invader "entering" our space but since it's full body is not there
we cannot count it as invading our precious space, but they might be close.

#### Input
- Our radar image. Example:
~~~~
----o--oo----o--ooo--ooo---------o---oo-o----oo---o--o---------o----o------o----------------o--o--o-
--o-o-----oooooooo-oooooo-------o----o------ooo-o---o--o----o------o--o---ooo-----o--oo-o------o----
--o--------oo-ooo-oo-oo-oo------------------oo---oo---o-----o------o---o--o--o-o-o------o----o-o-o--
-------o--oooooo--o-oo-o--o-o-----oo--o-o-oo----oooo--o--------o-----o------o-ooooo---o--o--o-------
------o---o-ooo-ooo----o------o-------o---oo-o-oooooo-----o----o--------o-oo--ooo-oo-------------o-o
-o--o-----o-o---o-ooooo-o-------o----o--------oo-oo-oo-oo-----------oo----ooooooo-ooo-oo------------
o-------------ooooo-o--o--o--o-------o--o-oo-ooooooooo---o-------------o--oooo--ooo-o----o-----o--o-
--o-------------------------oo---------oo-o-o---o--o--o-----o--o--o----o--o-o-----o-o------o-o------
-------------------o-----------------o--o------o-oo-o---o--------o--oo-o-----oo-oo---o--o---o-----oo
----------o----------o------------------o--o--o-o--o-o------------oo------o--o-o---o-----o----------
------o----o-o---o-----o-o---------oo-o--------o---------------------------------o-o-o--o-----------
---------------o-----oo------o-------o-------------------o-----o---------o-o-------------o-------oo-
-o--o---------------oooo-----o--o--oo-------------o----ooo----o-------------o----------oo----o---o-o
-o--o--------------oooooo------o--o-------o--o-----------o----o-----o--o----o--oo-----------o-------
-o-----oo-------o-oo-oo-oo-------------o--o----------o-----o-------o-----------o---o-o--oooooo-----o
-o--------o-----o-oooooooo------oo----oo---o-----------o---o--oooo-oo--o-------o------oo--oo--o-----
------------o-------o--o--------o----oooo-------------oo-oo-----ooo-oo-----o-------o-oo-oooooooo---o
-------------------o-oo-o----------oooooooo---o-----o-------o--oooooo-o------------o-o-ooooooo-o----
------------o-----o-o--o-o-o-------oo-oo--o--o---------o--o-o-o-ooooo-o--------------oo-o----o-oo-o-
---o-o----------o--------oo----o----oooooooo-------o----o-o-o-o-----o-o-----o----------ooo-oo--o---o
-o-o---------o-o---------------o--o--o--ooo---ooo-------o------oo-oo------------o--------o--o-o--o--
-----o-----o------------------------o-oo----------o------o-o-------o-----o----o-----o-oo-o-----o---o
------o---o-------o-------o-oo-----oo--oo-o----oo----------o--o---oo------oo----o-----o-------o-----
-----ooooooo--------o-o----o------------o---------o----o--o-------o-------------o----------------oo-
----oo-ooo-oo--------------o----o------o------o---oo-----------o-------------o----------oo---------o
--oooooooooooo-----o--o------o---o-----o--o-------------o------o-------o-----o-----o----o---oo----o-
-o-o-ooooooo-o------o-o-o-------o-----o--o-o-----------o-oo-----------o------o---------o---oooo-----
---o-o-----o-o-o-------o----o--o-------o-----o-----o---o---------------oo----o-----ooo----oooooo----
------oo-oo---o----o-o----o--o------o---o---o---o---o--o-oo--------o-oo-----o-o---o-o--o-oo-oo-oo---
------o--------o-ooooo----o---o--o-----ooooooo---------o-o-------o-----o-----------------oooooooo---
o-------oo----o--oooooo-o---o--o------oo-ooo-oo-----o-oo-------o---o----------o------oo----o--o-----
-o---o----------o--oo-oo-o---o-----o-ooooooooooo-------------oo--o------o------o----------o-oo-o----
-----oo-o-o-o---ooooooooo----o----o--o-ooooooo-o--oo---o------------o----------o-o---o---o-o--o-ooo-
------o------o---ooo-o---------------o-o-----o-o-o--o---o---o----o--o-------o-----o------o----o----o
-------o----------ooo-o-----o----o------oo-oo----o-o--o------o--o-oo---ooo------------------------o-
-o-------o------o-o--ooo--o---o---oo-----o----o-------------o----o-ooo-o------o--o-o------o-o-------
---oo--o---o-o---------o---o--------------o--o-----o-------o-----o--o---o-oo--------o----o----o-----
o------o----oo-o-----------oo--o---o--------o-o------o-------o-o------o-oo---------o-----oo---------
----o--o---o-o-----------o---o------------o-------o----o--o--o--o-o---------------o-----------------
-------oo--o-o-----o-----o----o-o--o----------------------o-------o------o----oo----ooo---------o---
o-----oo-------------------o--o-----o-----------o------o-------o----o-----------o----------------o--
--o---o-------o------------o--------------------o----o--o-------------oo---o---------oo--------o----
--o--------o---------o------------o------o-------o------------o-------o---o---------ooooo-----------
------o--------------o-o-o---------o---o-------o--o-----o-------o-o----------o-----oo-ooo----------o
--o---------------o----o--oo-------------o---------o-------------------oo---------oo-o-ooo----------
-o-----------o------ooo----o----------------ooo-----o--------o--o---o-----------o-o-oooooo--------oo
-o---o-------o---o-oooo-----o-------------------o----oo-----------------o--o--------o--o------o--o--
-------o---o------oooooo--o----ooo--o--------o-------o----------------------------oo-oo-o--o--------
o--oo------o-----oo--o-oo------------oo--o------o--o-------------oo----o------------oooo-o------oo--
-----o----------ooooooooo--------------oo--------------oo-----o-----o-o--o------o----------o----o---
~~~~


#### Output
Depending the amount of space invaders we get an announcement. Example:

```
There are 5 space invaders! Watch out!
```
