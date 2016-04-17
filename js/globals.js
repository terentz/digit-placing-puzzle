

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
//const GRAPH = [
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

var started = false;
var usedNodes = new Array();







/* graph.js code */
//var graph = new Graph();
//var nodeA = graph.addNode('A'),
//    nodeB = graph.addNode('B'),
//    nodeC = graph.addNode('C'),
//    nodeD = graph.addNode('D'),
//    nodeE = graph.addNode('E'),
//    nodeF = graph.addNode('F'),
//    nodeG = graph.addNode('G'),
//    nodeH = graph.addNode('H');
///* A to first row */
//nodeA.addEdge(nodeB);
//nodeA.addEdge(nodeC);
//nodeA.addEdge(nodeD);
///* first row horizontals */
//nodeB.addEdge(nodeC);
//nodeC.addEdge(nodeD);
///* inter-row verticals */
//nodeB.addEdge(nodeE);
//nodeC.addEdge(nodeF);
//nodeD.addEdge(nodeG);
///* inter-row diagonals */
//nodeB.addEdge(nodeF);
//nodeC.addEdge(nodeE);
//nodeC.addEdge(nodeG);
//nodeD.addEdge(nodeF);
///* second row horizontals */
//nodeE.addEdge(nodeF);
//nodeF.addEdge(nodeG);
///* second row to H */
//nodeE.addEdge(nodeH);
//nodeF.addEdge(nodeH);
//nodeG.addEdge(nodeH);
