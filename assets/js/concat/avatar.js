$(function(){
    // ''''''''avatar'''''''' //
    window.uploadImage = null;
    window.wCrop = null;
    var logo2 = '.file-avatar',
        modal = $('#cropperModalNoAjax'),
        galleryStaff = $('#staffPopopIn'),
        widthCrope = 700,
        heightCrope = 700,
        munis = 150,
        previewPicture = '.avatar-preview',
        dataPrev = '.member-avatar',
        saveData = '#save-staff',
        closedPopupLogo = '#close-staff-popup',
        windowW = $(document).width();
        // response //
        if(windowW < 780){
            heightCrope = 300,
            widthCrope = 300,
            munis = 50;
        }
    // '''''''''''methods''''''''''' //
    function previewFn() {
        $(modal).fadeIn();
        window.uploadImage = this;
        var fileUpload = uploadImage.files,
            reader = new FileReader();
        reader.onload = function (event) {
            window.nameUrl = event.target.result;
            $wCrop = $(galleryStaff).croppie({
                viewport: {
                    width: widthCrope - munis,
                    height: heightCrope - munis,
                },
                boundary: {
                    width: widthCrope,
                    height: heightCrope,
                },
                enableExif: true
            });
            $wCrop.croppie('bind', {
                url: nameUrl
            });
        };
        reader.readAsDataURL(fileUpload[0]);
    };

    function removeLogoPopup(){
        $(modal).fadeOut();
        $(galleryStaff).children().remove();
    }

    function saveDataFn(){
        $wCrop.croppie('result', {
            type: 'canvas',
            size: 'viewport'
        }).then(function(res) {
            $(window.prevAva).show();
            $('.avatar-signup').find('small').html('Change Avatar');
            $(window.prevAva).attr('src', res);
            $(window.dataAva).val(res);
        });
        removeLogoPopup();
    }
    // '''''''''''init''''''''''' //
    $('body').on('change', logo2, previewFn);
    $(saveData).click(saveDataFn);

    $('body').on('mousedown', '.avatar-signup', function(){
        window.prevAva = $(this).parent().find('.avatar-preview');
        window.dataAva = $(this).parent().find('.member-avatar');
    });
    $(closedPopupLogo).click(removeLogoPopup);
});
