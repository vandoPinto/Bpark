$(function () {
    $("#timePicker, #timePicker2").timepicker({
        timeFormat: 'h:i',
        interval: 30,
        scrollbar: true,
        dynamic: true
    });
    $("#datepicker, #datepicker2").datepicker();
});