$(function () {
    $("#timePicker, #timePicker2").timepicker({
        timeFormat: 'h:i',
        interval: 30,
        scrollbar: true,
        dynamic: true
    });
    $("#datepicker, #datepicker2").datepicker();

    $('#menu-toggle').click(function (e) {
        e.stopPropagation(); // Evita que o evento de clique seja propagado para o documento
        $('.nav-menu').toggleClass('active');
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.nav-menu').length && !$(e.target).is('.menu-hamburger')) {
            $('.nav-menu').removeClass('active');
        }
    });
});