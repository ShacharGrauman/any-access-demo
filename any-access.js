$('.btn.btn-primary').on('keydown', function(e) {
    if(e.key === 'Enter') {
        $('#firstName').focus();
    }
});

$('.btn.btn-secondary').attr('tabindex', '0');

