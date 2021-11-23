(function ($) {
	"use strict";
	
	let exddaApp = {        

		/**
         * Alert box
         * @since 1.0.0
         * @return {mixed} 
         */
		alertBox: function() {   
             
        },

		/**
         * Library support
         * @since 1.0.0
         * @return {mixed} 
         */
		libSupport: function() {
             
        }, 
        /**
         * Conditional meta field
         * @since 1.0.0
         * @return {mixed} 
         */
		conditionalField: function() { 
 
        },

        /**
         * Ajax functions
         * @since 1.0.0
         * @return {mixed} 
         */
		ajaxEvent: function() { 
           
        }, 
 
		/* ---------------------------------------------
		 function initialize
		 --------------------------------------------- */
		initialize: function() { 
			exddaApp.alertBox(); 
			exddaApp.libSupport(); 
			exddaApp.conditionalField();  
			exddaApp.ajaxEvent();  
		}
	};
	/* ---------------------------------------------
	 Document ready function
	 --------------------------------------------- */
	$(function() {
		exddaApp.initialize();
	});

	$(window).on('load', function() {

	});
})(jQuery);