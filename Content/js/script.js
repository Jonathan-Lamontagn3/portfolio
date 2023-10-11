$(function () {

    $('.small-img').click(function(){
        var current_img = $(this).attr('src');
        var current_txt_id = $(this).parent().index();
        var txt_list = $(this).parents('.project').children('.desc-container').children('.list-desc').children().children();
        $(this).parents('.img-container').children('.row').children('.big-img').attr('src', current_img)
        txt_list.hide();
        txt_list.eq(current_txt_id).show();
    })
    $('.big-img').click(function(){
        var url = $(this).attr('src');
        console.log(url);
        window.open(url, '_blank');
    })

})