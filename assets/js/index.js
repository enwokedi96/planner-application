$( 'document' ).ready(function(){
    var time;
    var extTime;
    var timePeriod;
    var currentDate = $('#currentDay')
    var timeblocks = $('.container')
    var rowClasses = ['col-2',
                        'col-8',
                        'col-2']
    var currentHour = moment().hours();
    currentDate.text(moment().format('LL'))

    for (var i=0; i<9; i++){
        var newRow = $("<div class='row time-block rowStyle'></div>")
        
        for (var j=0; j<3; j++){
            var newCol = $(`<div class=${rowClasses[j]} id ='${j}'></div>`)
            
            if (j===0){
                newCol.css("background-color","gold")
                time = 9+i;
                (time<12)? timePeriod = 'am': timePeriod = 'pm';
                (time<10)?extTime='0'+`${time}`:extTime=`${time}`
                newCol.text(extTime+':00'+timePeriod)
                newCol.addClass("hour")
            }
            else if (j===1){
                console.log(time,currentHour)
                if (time<currentHour){
                    newCol.addClass("past")}
                else if(time==currentHour){
                    newCol.addClass("class","present")}
                else {newCol.addClass("class","future"); } 
            }
            else {
                newCol.addClass("saveBtn")
                newCol.prepend(`<i class="fas fa-save">`)
            }
            newRow.append(newCol)
        }
        newRow.css({"display":"flexbox",
                        //"border": "solid 2px #76adff",
                        "margin-top":"10px"})
        timeblocks.append(newRow)
    }
}
)