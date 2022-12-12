$( 'document' ).ready(function(){
    var timePeriod;
    var currentDate = $('#currentDay')
    var timeblocks = $('.container')

    currentDate.text(moment().format('LL'))

    for (var i=0; i<9; i++){
        var newRow = $("<div></div>").attr({"class":"row",
                                            "id":`${i}`,
                                            });
        ((9+i)<12)? timePeriod = 'am': timePeriod = 'pm';
        for (var j=0; j<3; j++){
            var newCol = $(`<div class='col' id =${j}>one</div>`)
            newRow.append(newCol)
            if (j===0){
                newCol.attr("class","justify-items-")
                newCol.text(9+i+':00'+timePeriod)
            }

        }
        timeblocks.append(newRow)
    }
}
)