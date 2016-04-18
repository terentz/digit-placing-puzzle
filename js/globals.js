

/* GLOBALS */

NODES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

//   A B C D E F G H
// A - 1 1 1 0 0 0 0
// B 1 - 1 0 1 1 0 0
// C 1 1 - 1 1 1 1 0
// D 1 0 1 - 0 1 1 0
// E 0 1 1 0 - 1 0 1
// F 0 1 1 1 1 - 1 1
// G 0 0 1 1 0 1 - 1
// H 0 0 0 0 1 1 1 -

GRAPH = [
    [null,  true,   true,   true,   false,  false,  false,  false],
    [true,  null,   true,   false,  true,   true,   false,  false],
    [true,  true,   null,   true,   true,   true,   true,   false],
    [true,  false,  true,   null,   false,  true,   true,   false],
    [false, true,   true,   false,  null,   true,   false,  true],
    [false, true,   true,   true,   true,   null,   true,   true],
    [false, false,  true,   true,   false,  true,   null,   true],
    [false, false,  false,  false,  true,   true,   true,   null]
];

COLOURS = {
    used : 'white',
    valid : 'lightgreen',
    current : 'green',
    invalid : 'red',
    static : 'white'
};

var started = false,
    current = 0;
var usedNodes = new Array(),
    validNodes = new Array();
var prevNode = null,
    currNode = null,
    nextNode = null;






