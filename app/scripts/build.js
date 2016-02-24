// Shortcut alias
require.config({
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    paths: {
        // Vendor
        jquery: [
            // jQuery loaded from the CDN with a fall back local version
            '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
            'vendor/jquery-2.2.0.min'
        ],

        // Plugins
        bootstrap: 'plugins/bootstrap.min',

        // Modules
        scrollUp: 'modules/scroll_up',
        snake: 'modules/snake'
    }
});

// Load main app
require(['main'], function(){});