$( 'document' ).ready(function(){
    var time;
    var extTime;
    var timePeriod;
    var currentDate = $('#currentDay')
    var timeblocks = $('.container')
    var rowClasses = ['col-sm-2 col-md-2 col-lg-1',
                        'col-sm-7 col-md-8 col-lg-10',
                        'col-sm-3 col-md-2 col-lg-2']
    var currentHour = moment().hours();
    currentDate.text(moment().format('LL'))

    for (var i=0; i<9; i++){
        var newRow = $("<div class='row'></div>")
        
        for (var j=0; j<3; j++){
            var newCol = $(`<div class=${rowClasses[j]} id =${j}></div>`)
            newRow.append(newCol)
            if (j===0){
                newCol.css("background-color","gold")
                time = 9+i;
                (time<12)? timePeriod = 'am': timePeriod = 'pm';
                (time<10)?extTime='0'+`${time}`:extTime=`${time}`
                newCol.text(extTime+':00'+timePeriod)
                newCol.addClass("time-block")
            }
            else if (j===2){
                newCol.attr("class","saveBtn",)
                newCol.prepend(`<i class="fas fa-save">`)
            }

        }
        newRow.css({"display":"flexbox",
                        //"border": "solid 2px #76adff",
                        "margin-top":"10px"})
        timeblocks.append(newRow)
    }
}
)