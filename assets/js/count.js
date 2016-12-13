$(function(){
    var $plusCount = $('.fa-plus-circle, .fa-minus-circle'),
        $totalTag = $('.count-booking .total'),
        l = $('.list .row').lengthб,
        totalPr = [];

    for(i = 0; i < l; i ++){
        totalPr.push(0);
    }
    // methods //
    function countBooking(){
        activeRow = $(this).closest('.col-md-6'),
        countTag = $(activeRow).find('.count-plus'),
        countPrice = $(activeRow).find('.count-price'),
        activeInput = $(activeRow).find('.count-value'),
        valCount = $(activeInput).val(),
        countTagLocaly = $(activeRow).find('.fa-minus-circle'),
        dataBooking = parseInt($(countPrice).text().replace(/\D+/g,""));

        ($(this).hasClass('fa-plus-circle'))?
        valCount ++ :
        valCount -=(valCount <= 0) ? false : 1;

        if(valCount <= 0 ){
            $(activeRow).removeClass('active');

            $(countTagLocaly).hide();
            $(countTag).hide();
        }else{
            $(activeRow).addClass('active');

            $(countTagLocaly).show();
            $(countTag).show();
        }
        $(activeInput).val(valCount);
        $(countTag).html(valCount + ' x');

        // count //
        result =  dataBooking *  valCount;

        var indexRow = $(this).closest('.row').index();
        totalPr[indexRow] = result;

        var totalSum = totalPr.reduce(function(sum, current){
            return sum + current;
        });
        $totalTag.html('Total: $' + totalSum);
        $('#total-booking').val(totalSum);

    }
    // initions listing-dateil.booking PAGE//
    $plusCount.click(countBooking);
});