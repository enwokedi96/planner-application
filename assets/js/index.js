$( 'document' ).ready(function(){
    var time;
    var timePeriod;
    var currentDate = $('#currentDay')
    var timeblocks = $('.container')

    currentDate.text(moment().format('LL'))

    for (var i=0; i<9; i++){
        var newRow = $("<div></div>")
        newRow.attr({"class":"row","id":`${i}`,});
        //newRow.css("background-color", "yellow")
        
        for (var j=0; j<3; j++){
            var newCol = $(`<div class='col' id =${j}>one</div>`)
            newRow.append(newCol)
            if (j===0){
                newCol.attr({"class":"justify-content-start",
                            "class":"align-items-middle"})
                time = 9+i;
                (time<12)? timePeriod = 'am': timePeriod = 'pm';
                (time<10)?time='0'+`${time}`:time=`${time}`
                newCol.text(time+':00'+timePeriod)
                newCol.css({"border-radius": "10px",})
            }
            newCol.css({"border": "solid 2px #76adff",})

        }
        timeblocks.append(newRow)
    }
}
)