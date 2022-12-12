$( 'document' ).ready(function(){
    var currentDate = $('#currentDay')
    var timeblocks = $('.container')

    currentDate.text(moment().format('LL'))

    for (var i=0; i<9; i++){
        var newRow = $("<div></div>").attr({"class":"row","id":`${i}`})
        
        for (var j=0; j<3; j++){
            var newCol = $(`<div class='col' id =${j}>one</div>`)
            newRow.append(newCol)
            if (j===0){

            }

        }
        timeblocks.append(newRow)
    }
}
)