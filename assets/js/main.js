(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	$('.menu li').on( 'click', function() {

    		$('.menu li').removeClass('active')
    		$(this).addClass('active');




           var selector = $(this).attr('data-filter');
           $(".filter").isotope({ 
           	filter: selector 
           });
        });


        

    });


    jQuery(window).load(function(){

    	jQuery(".filter").isotope();

        
    });


}(jQuery));	