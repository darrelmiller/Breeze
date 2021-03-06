﻿(function (root) {
    
    requirejs.config({      
         paths: { // well-known paths to selected scripts
             'breeze': '../breeze.debug', // load debug version of breeze
         }
     });

    // Register with require these 3rd party libs 
    // which are now in the root global namespace
    define('jquery', function () { return root.jQuery; });
    define('ko', function () { return root.ko; });

    //  Launch the app
    define(['jquery', 'ko', 'logger'], function ($, ko, logger) {

        logger.info('Breeze Todo is booting');

        // '../text' is an html-loader require plugin; 
        // see http://requirejs.org/docs/api.html#text
        require(['viewModel', '../text!view.html'],
        
            function(viewModel, viewHtml) {
                var $view = jQuery(viewHtml);
                ko.applyBindings(viewModel, $view.get(0));
                $("#applicationHost").append($view);
            
        });
    });
    
})(window);