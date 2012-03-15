$(document).ready(function () {
    $('#menu-principal a').click(function(e){
        var id = $(this).attr('href');
        id = id.replace(/[^\#]*(\#.+)/, "$1");
        var scroll = $(id).offset().top;
        $('html,body').stop().animate( {scrollTop: scroll} , {duration:1000, easing:'easeOutQuint'} );
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
});


