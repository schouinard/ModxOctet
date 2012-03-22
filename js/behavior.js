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
    
    
    $(".services div.img-service").click(function(){
       if($(".services div.desc-service").filter(":visible").length)
       {
            if(!$(this).next().hasClass('open'))
            {
                $(".services div.desc-service").filter(":visible").fadeOut('slow');
                $(".services div.desc-service").filter(":visible").removeClass('open');
                $(this).next().fadeIn('slow');
                $(this).next().addClass('open');
            }

       }
       else
       {
           $(this).next().slideToggle(); 
           $(this).next().toggleClass('open');
       } 
    });
    
    $(".realisations div.vignette").click(function(e){
        e.preventDefault();
        var me = $(this);
        var divScreenshot = $('#realisation-screenshot'); 
        if(me.hasClass('open'))
        {
            me.removeClass('open');
            divScreenshot.slideUp('slow').removeClass('open');
            
        }
        else
        {
            var rangee = me.parent().data('row');
            var lien = me.children('a').attr('href');
            $('.vignette.open').removeClass('open');
            me.addClass('open');
            
           
           var prochaineRangee = rangee + 1;
           var premierItemProchaineRangee = $('div[data-row="' + prochaineRangee +'"]').first();
           
           divScreenshot.height(divScreenshot.width());
           if(divScreenshot.prev().data('row') == rangee && divScreenshot.hasClass('open'))
           {
                divScreenshot.height(divScreenshot.height()).children().fadeOut('fast', function(){
                   divScreenshot.load(lien, function(){
                       divScreenshot.children().hide();
                       divScreenshot.children().fadeIn('fast', function(){});
                   });
               });
               
               
           }
           else{
               divScreenshot.slideUp('slow', function(){
                   divScreenshot.load(lien, function(){
                       if(premierItemProchaineRangee.length)
                       {
                           $(premierItemProchaineRangee).before(divScreenshot);
                       }
                       else{
                           $('div[data-row="' + rangee + '"]').last().after(divScreenshot);
                       }               
                       divScreenshot.slideDown();
                       divScreenshot.addClass('open');
                        });
               });
           } 
       }
       
       
       /* if($(".realisations div.image").filter(":visible").length)
       {
            if(!$(this).next().hasClass('open'))
            {
                $(".realisations div.image").filter(":visible").fadeOut('slow');
                $(".realisations div.image").filter(":visible").removeClass('open');
                $(this).next().fadeIn('slow');
                $(this).next().addClass('open');
            }

       }
       else
       {
           $(this).next().slideToggle(); 
           $(this).next().toggleClass('open');
       }    */
       
    });
});





