function generateID (){

    var val = 0
    return function(intial){
    var v = val
    val += 1
    
    return v 
    }}
    
    
    var counter = generateID()








var colsAndRows =


[[0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0]
]






var gridContainer = $('#grid-container')

colsAndRows.forEach((row, colIndex) => {
    var rowElement = $('<div  class="grid-row"></div>')

    row.forEach((col, rowIndex) => {
        var gridItem = $(`<div class="grid-item" id="${rowIndex}-${colIndex}">row ${rowIndex}-${colIndex}</div>`)
        rowElement.append(gridItem)
    });



    gridContainer.append(rowElement)
})
  





function toInt(el) {
    return el.map(function(e) {
        return parseInt(e)
    })
}






// $('.grid-item').click(function() {

//     // console.log($(this).css('background-color'));



//     var id = $(this).attr('id');
//     var coordinates = id.split('-')
    
//     currentElement.push(toInt(coordinates))
//     console.log(currentElement)


    



    
// var color = $(this).css('background-color')

// if (color === 'rgb(255, 255, 255)'){
//     $(this).css('background-color', 'black')

// }

// else {
//     $(this).css('background-color', 'rgb(255, 255, 255)');
// }}




// )




var currentElement = [];

$('.grid-item').click(function() {
    var id = $(this).attr('id');
    var coordinates = toInt(id.split('-'))

    var row = coordinates[0];
    var col = coordinates[1];



 if (colsAndRows[row][col] === 0) {
       
        colsAndRows[row][col] = 1
        $(this).css('background-color', 'black')
        
    
        currentElement.push(coordinates)
    } else {
       
        colsAndRows[row][col] = 0
        $(this).css('background-color', 'rgb(255, 255, 255)');
        
        
        currentElement = currentElement.filter(function(coord) {
            return !(coord[0] === row && coord[1] === col)
        });
    }

    
    console.log('matrix ', colsAndRows);
    console.log(currentElement)
});







// $('#add').click(function(form){



    




// })
















    



