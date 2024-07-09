
var colsAndRows = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

var gridContainer = $('#grid-container');

function initializeGrid() {
    colsAndRows.forEach((row, colIndex) => {
        var rowElement = $('<div class="grid-row"></div>')

        row.forEach((col, rowIndex) => {
            var gridItem = $(`<div class="grid-item" id="${rowIndex}-${colIndex}"> . </div>`)
            rowElement.append(gridItem)
        })

        gridContainer.append(rowElement)
    });
}

function toInt(el) {
    return el.map(function(e) {
        return parseInt(e)
    })
}

var currentState = []

var shapes = [

    [[0, 2], [0, 3], [0, 4], [0, 5], [0, 6]],      // long shape
    [[0, 3], [0, 4], [1, 4], [0, 5]],              // triangle shape
    [[0, 4], [1, 4], [0, 5], [1, 5]],              // square shape
    [[0, 5], [1, 5], [1, 6], [2, 6]],               // zigzag shape
    [[0,5],[1,5],[2,5]]                           // bar shape

    
    
];

function createObject() {
    var randomShape = Math.floor(Math.random() * shapes.length);
    currentState = shapes[randomShape].map(function(coords) {
        return [coords[0], coords[1]]
    })
}

var moveLeft = false
var moveRight = false

function dropObject() {
console.log(currentState)
    var collusion = false

    currentState.forEach(function(coords) {
        var row = coords[0]
        var col = coords[1]

        if (row === 8 || (colsAndRows[row + 1][col] === 1 && currentState.reduce(function(acc, el) {
            return acc && !(el[0] === row + 1 && el[1] === col)
        }, true))) {
            collusion = true
        }
    })

    if (collusion) {

        clearInterval(interval)
        nextObject()
        clearRows()
        updateGrid() 
    } else {
        
        var previousState = currentState.map(function(coords) {
            return [coords[0], coords[1]]
        });

        previousState.forEach(function(coords) {
            var Row = coords[0]
            var Col = coords[1]
            colsAndRows[Row][Col] = 0
        })

currentState.forEach(function(coords) {
    coords[0]++
        });

if (moveLeft) {
            if (noCollusionL()) {
                currentState.forEach(function(coords) {
                    coords[1]--
                })
            }
} else if (moveRight) {
            if (noCollusionR()) {
                currentState.forEach(function(coords) {
                    coords[1]++
                })
            }
        }

        currentState.forEach(function(coords) {
            var rowIdx = coords[0]
            var colIdx = coords[1]
            colsAndRows[rowIdx][colIdx] = 1
        });

        moveLeft = false
        moveRight = false

        updateGrid()
    }
}

function noCollusionL() {
    return currentState.reduce(function(acc, coords) {
        var row = coords[0]
        var col = coords[1]
         return acc && (col !== 0 && colsAndRows[row][col - 1] !== 1)
    }, true)
}

function noCollusionR() {
    return currentState.reduce(function(acc, coords) {
        var row = coords[0]
        var col = coords[1]
        return acc && (col !== 8 && colsAndRows[row][col + 1] !== 1)
    }, true)
}

function updateGrid() {
    $('.grid-item').each(function() {
        var id = $(this).attr('id')
        var coordinates = toInt(id.split('-'))
        var row = coordinates[0]
        var col = coordinates[1]

        if (colsAndRows[row][col] === 1) {
            $(this).css('background-color', 'red')
        } else {
            $(this).css('background-color', 'transparent')
        }
    });
}

    $(document).keydown(function(event) {
         if (event.key === '4') {
          moveLeft = true
        } else if (event.key === '6') {
         moveRight = true
    }
});

var interval = setInterval(dropObject, 750)

function nextObject() {
    createObject();
    interval = setInterval(dropObject, 750)
}

initializeGrid()
createObject()

function clearRows() {
    for (var row = colsAndRows.length - 1 ; row >= 0 ; row--) {
        var filled = true


        for (var col = 0 ; col < colsAndRows[row].length ; col++) {

     if (colsAndRows[row][col] !== 1) {
                filled = false
                break
            }
        }
        if (filled) {
            
            for (var c = 0; c < colsAndRows[row].length; c++) {
                colsAndRows[row][c] = 0
            }
         
  for (var r = colsAndRows.length - 2 ; r >= 0; r--) {
        for (var c = 0; c < colsAndRows[r].length; c++) {


            if (colsAndRows[r][c] === 1) {
                colsAndRows[r + 1][c] = 1
                colsAndRows[r][c] = 0
                    }
        }
 }}
 }
}

