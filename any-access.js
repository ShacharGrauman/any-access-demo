$('.btn.btn-primary.btn-block').attr('tabindex','0').on('click keydown',function(e){
    if(e.key=='Enter', e.type=='click'){
        console.log('click');
        $(this).closest('.needs-validation').find('input:first').focus().attr('role','alert');
    }
});