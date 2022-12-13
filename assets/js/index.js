var schedule = {
    9:'',10:'',11:'',12:'',13:'',
    14:'',15:'',16:'',17:''
};
if (localStorage.getItem('schedule')===null){
    localStorage.setItem('schedule',JSON.stringify(schedule));
}
function loadSchedule(id){

}

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
        time = 9+i;
        var newRow = $("<div class='row time-block rowStyle'></div>")
        
        for (var j=0; j<3; j++){
            var newCol = $(`<div class=${rowClasses[j]}></div>`)
            // time blocks
            if (j===0){
                newCol.css("background-color","gold");
                (time<12)? timePeriod = 'AM': timePeriod = 'PM';
                (time<10)?exactTime=`0${time}:00${timePeriod}`:exactTime=`${time}:00${timePeriod}`
                newCol.text(exactTime);
                newCol.addClass("hour");
            }
            // schedule blocks
            else if (j===1){
                console.log(time,currentHour);
                // apply colours depending on time
                (time<currentHour)?newCol.addClass("past") :
                (time==currentHour)?newCol.addClass("present") :
                newCol.addClass("future"); 
                // add id coppesponding to time block
                newCol.attr({'id': `${time}`,"contenteditable":"true"});
                //
                newCol.css({'display':'flex','justify-content': 'baseline'})
            }
            // save blocks
            else {
                newCol.addClass("saveBtn")
                newCol.prepend(`<i class="fas fa-save">`)
            }
            newRow.append(newCol)
        }
        newRow.css({//"border": "solid 2px #76adff",
                        "margin-bottom":"10px"})
        timeblocks.append(newRow)
    }

    timeblocks.on('click', function(event){
        console.log(`Currently on event: ${event.target.id}`)
        var clickedSchedule = event.target.id //$(`#${event.target.id}`);
        //currentSchedule.attr({"contenteditable":"true"});
        //event.stopPropagation();
    })
}
)