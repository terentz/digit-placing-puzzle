/*
 * Main game file.
 */


/* TOP LEVEL FUNCTIONS */

function move( ) {
    // Get id of firing element..
    target = $(event.currentTarget);
    node = target.attr('id');
    if ( node.match(/^txt_[A-H]$/) ) node = node.substr(4);
    
    // If take back..
    if ( node === currNode ) moveBack(node);
    // Otherwise, move forward..
    else if ( validNodes.indexOf(node) > -1 ) moveForth( node );
}
function moveForth( id ) {
    // Set prevNode..
    if ( !started ) {
        started = true;
        prevNode = '';
    } else {
        prevNode = currNode;
    }
    
    // Update current node..
    currNode = id;                                      // Update current node
    usedNodes.push(id);                                 // Add current to usedNodes
    $('#txt_'+id).text( (++current).toString() );       // Add a number to the new current node 

    // Set the nodes that are now valid..
    setValid(id);
}
function moveBack( id ) {
    --current;
    // Blank out current square..
    $('#txt_'+id).text('');
    $('#'+id).attr('fill', 'white');
    
    // Pop from usedNodes, and update main node types..
    nextNode = usedNodes.pop();
    if ( usedNodes.length > 0 ) {
        currNode = usedNodes[usedNodes.length-1];
    } else { 
        currNode = null;
        started = false;
    }
    if ( usedNodes.length > 1 ) {
        prevNode = usedNodes[usedNodes.length-2];
    } else {
        prevNode = null;
    }
    
    // Set valid nodes..
    setValid( started ? currNode : '0' );
}
function restart( ) {
    $('.nodeText').text('');
    prevNode = null;
    currNode = null;
    nextNode = null;
    started = false;
    current = 0;
    usedNodes = null;
    usedNodes = new Array();
    setValid();
}

function grabInvalidNode( ) {
    clicked = $(event.currentTarget).attr('id');
    if ( adjacent( clicked, currNode ) ) {
        if ( clicked < currNode ) $('#'+clicked+currNode).attr('stroke',COLOURS.invalid);
        else $('#'+currNode+clicked).attr('stroke',COLOURS.invalid);
    }
}
function dropInvalidNode( ) {
    clicked = $(event.currentTarget).attr('id');
    if ( adjacent( clicked, currNode ) ) {
        if ( clicked < currNode ) $('#'+clicked+currNode).attr('stroke',COLOURS.static);
        else $('#'+currNode+clicked).attr('stroke',COLOURS.static);
    }
}




/* GAME UTILITIES */

function setValid( id ) {
//    console.log('in setValid()');
    if ( !started ) {
        // Set valid nodes (pre-game)
        for ( node in NODES ) {
            id = NODES[node];
            validNodes.push( id );
            $('#'+id).addClass('valid');
        }
    } else {
        // Game started...
        $('circle').removeClass('valid');
        validNodes = null;
        validNodes = new Array();
        for ( node in NODES ) {
            var other = NODES[node];
            // If other is not in usedNodes and other is not adjacent to id... 
            if ( usedNodes.indexOf( other ) < 0 && adjacent( id, other ) === false ) {
                // Node is valid...
                validNodes.push(other);
                $('#'+other).addClass('valid');
            }
        }
    }
}
function adjacent( id1, id2 ) {
    return GRAPH[ NODES.indexOf(id1) ][ NODES.indexOf(id2) ];
}


/* EVENT HANDLERS */

$('circle').bind('click', move);
$('text').bind('click', move);
$('circle').bind('mousedown', grabInvalidNode);
$('circle').bind('mouseup', dropInvalidNode);
$('circle').bind('mouseout', dropInvalidNode);


/* INIT'S */
setValid('0');
