$( 'document' ).ready(function(){
    var currentDate = $('#currentDay')
    var timeblocks = $('.container')

    currentDate.text(moment().format('LL'))

    for (var i=0; i<9; i++){
        timeblocks.attr(`<div class='row' id=${i}></div>`)

        
}
}
)