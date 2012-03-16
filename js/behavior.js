$(document).ready(function () {
    /**
    * Action déclenchée lorsqu'on clique sur un element de menu
    */
    $('#menu-principal a').click(function(e){
        var id = $(this).attr('href');
        id = id.replace(/[^\#]*(\#.+)/, "$1");
        var scroll = $(id).offset().top;
        $('html,body').stop().animate( {scrollTop: scroll} , {duration:1000, easing:'easeOutQuint'} );
        $("#menu-principal a").removeClass('selected');
        $(this).addClass('selected');
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    /**
    * Action déclenchée lorsqu'une section atteint le top de la page
    */
    $('#content section').waypoint( function () {
        if(!$('html,body').is(':animated')) {
            var a = $("#menu-principal li").find("[data-section='" + $(this).attr('id') +"']");
            $("#menu-principal a").removeClass('selected');
            a.addClass('selected');
        }
    });

    $("#form-contact").validate();

});





