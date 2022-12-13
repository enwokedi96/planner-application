$( 'document' ).ready(function(){
    var time;
    var exactTime;
    var timePeriod;
    var placeholder;
    var currentDate = $('#currentDay')
    var timeblocks = $('.container')
    var rowClasses = ['col-2',
                        'col-8',
                        'col-2']
    var currentHour = moment().hours();
    currentDate.text(moment().format('LL'))

    var schedule = {
        9:'',10:'',11:'',12:'',13:'',
        14:'',15:'',16:'',17:''
    };
    if (localStorage.getItem('schedule')===null){
        localStorage.setItem('schedule',JSON.stringify(schedule));
    }

    // timeout used to add delays (adapted)
    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    }
    
    function persistScheduleOnScreen(obj){
        if (obj===null||obj===undefined){
            console.log('loading from storage...');
            var allSchedule = JSON.parse(localStorage.getItem('schedule'));
        }
        else{
            console.log('loading after schedule input...');
            var allSchedule = obj;}
        // check all storage values and display on screen
        for (let i=0; i<Object.keys(allSchedule).length; i++){
            var currentSchedule = $(`#schedule_${Object.keys(allSchedule)[i]}`);
            currentSchedule.text(allSchedule[`${Object.keys(allSchedule)[i]}`]) ;
            //currentSchedule.innerHTML= allSchedule[`${Object.keys(allSchedule)[i]}`]
            //console.log(allSchedule[`${Object.keys(allSchedule)[i]}`]);
            }
        }
    
    function loadScheduleToStorage(id,text){
        console.log(`get id ${id} and store '${text}'`);
        var allSchedule = JSON.parse(localStorage.getItem('schedule'));
        delay(50);
        allSchedule[`${id}`] = text;
        // check all storage values and update if current or past time
        for (let i=0; i<Object.keys(allSchedule).length; i++){
            //console.log(Object.keys(allSchedule)[i],id)
            if (Object.keys(allSchedule)[i]<moment().hours()){
                    allSchedule[`${Object.keys(allSchedule)[i]}`] = 'This event has already passed!';
                }
            else if (Object.keys(allSchedule)[i]==moment().hours()){
                    allSchedule[`${Object.keys(allSchedule)[i]}`] = 'Current Event'
                }
            else {console.log(`time:${Object.keys(allSchedule)[i]} | Future event, can edit!`)}
                }
        if (id==''){
            console.log(`error in reading user input!`)
        }
        localStorage.setItem('schedule',JSON.stringify(allSchedule));
        delay(100);
        persistScheduleOnScreen(allSchedule);
    }

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
                //console.log(time,currentHour);
                // apply colours depending on time
                (time<currentHour)?newCol.addClass("past") :
                (time==currentHour)?newCol.addClass("present") :
                newCol.addClass("future"); 
                // add editable func
                newCol.attr({"id":`schedule_${time}`,"contenteditable":"true"});
                //newCol.css({'display':'flex','justify-content': 'baseline'})
            }
            // save blocks
            else {
                newCol.addClass("saveBtn")
                newCol.prepend(`<i class="fas fa-save">`)
                // add id coppesponding to time block
                newCol.attr({'id': `${time}`})
            }
            newRow.append(newCol)
        }
        newRow.css({//"border": "solid 2px #76adff",
                        "margin-bottom":"10px"})
        timeblocks.append(newRow)
    }

    // load contents from memory
    persistScheduleOnScreen(placeholder);
    // listen for future events (that are editable) and prevent default
    var futureSchedule = $('.future');
    futureSchedule.on('change',function(event){
        event.preventDefault();
    })
    // load all save buttons and listen for click
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function(event){
        //event.preventDefault();
        var id = event.target.id;
        var clickedSchedule = $(`#schedule_${id}`);
        text = clickedSchedule.text()
        loadScheduleToStorage(id,text);
        //event.stopPropagation();
        //delay(200);
    })
}
)
