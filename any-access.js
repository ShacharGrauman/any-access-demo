
$('.btn.btn-primary.btn-block').attr('tabindex','0').on('click keydown',function(e){
    if(e.key=='Enter', e.type=='click'){
        console.log('click');
        $(this).closest('.needs-validation').find('input:first').focus().attr('role','alert');
    }
});

$('.btn.btn-primary').on('keydown', function(e) {
    if(e.key === 'Enter') {
        $('#firstName').focus();
    }
});

//set radio group
$('form > div.d-block.my-3').attr({ 'role': 'radiogroup', 'aria-label': function(){
    return $(this).prev().text();
} });

//hide default input
$('form > div.d-block.my-3 input').attr({'tabindex': '-1', 'role': 'presentation'});

//set labels
let ind = 1;
$('.custom-radio').each(function () {
    $(this).children('label').attr('id', 'radioLbl' + ind);
    $(this).attr({ 'role': 'radio', 'aria-labelledby': 'radioLbl' + ind });
    i++;
});


// navigation
$('.custom-radio:first-child').attr({ 'aria-checked': 'true', 'tabindex': '0' });
// $('.custom-radio:not(:first-child)').attr({ 'aria-checked': 'false', 'tabindex': '-1' });

//check the first radio button
$('.custom-radio:not(:first-child)').on('focus', function () {
    $(this).children('input').click();
});

$('.btn.btn-secondary').attr('tabindex', '0');

$('.custom-radio').on("keydown", function (e) {
    if (e.which == 37 || e.which == 40) { // down&left
        e.preventDefault();
        let next = $(this).next('.custom-radio');
        if (next.length) {
            $(this).next('.custom-radio').attr({ 'aria-checked': 'true', 'tabindex': '0' }).focus().click();
            $(this).attr({ 'aria-checked': 'false', 'tabindex': '-1' });
        }
    }
});

$('.custom-radio').on("keydown", function (e) {
    if (e.which == 39 || e.which == 38) { // up&right
        e.preventDefault();
        let prev = $(this).prev('.custom-radio');
        if (prev.length) {
            $(this).prev('.custom-radio').attr({ 'aria-checked': 'true', 'tabindex': '0' }).focus().click();
            $(this).attr({ 'aria-checked': 'false', 'tabindex': '-1' });
        }
    }
});
