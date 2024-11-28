$(document).ready(function() {
    $('#check').change(function() {
        if($(this).prop('checked')){
            $('header').slideDown('slow');
            $('label[for="check"]').html('<i class="fa-solid fa-eye"></i>');
        } else {
            $('header').slideUp('slow');
            $('label[for="check"]').html('<i class="fa-solid fa-eye-slash"></i>');
        }
    });
});