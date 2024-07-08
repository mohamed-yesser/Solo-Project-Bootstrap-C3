function generateID (){

    var val = 0
    return function(intial){
    var v = val
    val += 1
    
    return v 
    }}
    
    
    var counter = generateID()








var colsAndRows =


[[0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0]
]



var gridContainer = $('#grid-container')

colsAndRows.forEach((row, rowIndex) => {
    var rowElement = $('<div  class="grid-row"></div>')

    row.forEach((col, colIndex) => {
        var gridItem = $(`<div class="grid-item" id=" ${rowIndex}-${colIndex}">row ${rowIndex}-${colIndex}</div>`)
        rowElement.append(gridItem)
    });



    gridContainer.append(rowElement)
})
  


$('.grid-item').click(function(event) {


var z =  $(this).attr('id')

       
        $(this).css('background-color', 'black')
        console.log('white')
    
console.log(z)


}
)

















    



