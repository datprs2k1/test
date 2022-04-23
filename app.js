$(document).ready(function () {

    $('#burger').on('click', function () {
        if ($('#menu').hasClass('hidden')) {
            $('#menu').removeClass('hidden');
        } else {
            $('#menu').addClass('hidden');
        }
    });
});