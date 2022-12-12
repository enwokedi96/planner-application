$( 'document' ).ready(function(){
    var time;
    var extTime;
    var timePeriod;
    var currentDate = $('#currentDay')
    var timeblocks = $('.container')
    var rowClasses = ['col-sm-2 col-md-3 col-lg-2',
                        'col-sm-8 col-md-8 col-lg-8',
                        'col-sm-2 col-md-1 col-lg-2']
    var currentHour = moment().hours();
    currentDate.text(moment().format('LL'))

    for (var i=0; i<9; i++){
        var newRow = $("<div class='row'></div>")
        
        for (var j=0; j<3; j++){
            var newCol = $(`<div class=${rowClasses[j]} id =${j}></div>`)
            newRow.append(newCol)
            if (j===0){
                newCol.attr("class","align-items-start",)
                newCol.css("background-color","#deff6fff")
                time = 9+i;
                (time<12)? timePeriod = 'am': timePeriod = 'pm';
                (time<10)?extTime='0'+`${time}`:extTime=`${time}`
                newCol.text(extTime+':00'+timePeriod)
                //newCol.css({"border-radius": "10px", })
            }
            else if (j===2){
                //newCol.attr("class","justify-content-center",)
                newCol.prepend(`<i class="fas fa-save">`)
            }
            newCol.css({"display":"flexbox",
                        "border": "solid 2px #76adff",
                        "border-radius": "10px",
                        "padding-top":"25px"})

        }
        timeblocks.append(newRow)
    }
}
)