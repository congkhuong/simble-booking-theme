$(function(){
    // __________VARS__________ //
    var appendNumber = 4,
        prependNumber = 1,
        swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 10,
            slideToClickedSlide: true,
        }),
        bySelf = '#byself',
        formContent = '.form-for-content',
        navParent = '.nav-parent',
        ticketDetails = '.entry h6',
        activeCl = 'active',    
        memberLink = $('.member-content-title a'),
        memTab = $('.member-content');
    
    // ________METHODS________ //
    function bySelfFn(){
        $(formContent).slideToggle(400);
    }

    function personData(){
        $(this).find('p').toggle();
    }
    function tickeFn(){
        less = "<h6 class='detail-less'>show less <i class='fa fa-chevron-up'></i></h6>",
        clName = $(this).find('i').attr('class'),
        prThis = $(this).parent();

        $(this).parent().find('.detail-wrapper').slideToggle(400);
        $(prThis).find('.ticket-detail').toggle();

        if(clName === 'fa fa-chevron-down'){
            $(prThis).find('.cut').before(less);
        }else{
            $(prThis).find('.detail-less').remove();
        }
    }

    function paymentTab(){
        vm = $(this),
        indexLink = $(this).index();
        activeTab = $(memTab)[indexLink];

        $(memTab).removeClass('member-content-active');
        $(activeTab).addClass('member-content-active');

        $(memberLink).removeClass(activeCl);
        $(vm).addClass(activeCl);
    }
    function closeAlert(){
        $(this).parent().hide();
    }
    // _________INITION_________ //
    $(memberLink).click(paymentTab);
    $('button.close').click(closeAlert);
    $(bySelf).change(bySelfFn);
    $(navParent).click(personData);
    $('body').on('click', ticketDetails, tickeFn);
    $(document).on('click', function (e) {
        if (!$(e.target).closest(navParent).length) {
            $(navParent).find('p').hide();
        }
        e.stopPropagation();
    });
    // '''''''''''datepiker''''''''''//
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        pickDate: true, 
        showOn: 'button',
        keyboardNavigation: false,
        forceParse: false,
        allowInputToggle: true,
        toggleActive: true
    });

    $('.member-picker').click(function(event){
        $('.member-picker').show();
        $('.member-form p').hide();
        $parent = $(this).parent();

        $datepicker = $parent.find('input');
        $time = $parent.find('p').css('display', 'inline-block');
        
        $(this).hide();
        $datepicker.focus();
    });

});







