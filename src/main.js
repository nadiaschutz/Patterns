requirejs.config({
    paths: {
        "jquery": "3rdparty/require-jquery"
        //
        // XXX: we do not have a nested config solution yet. Until
        // then we stick with require-jquery and relative dependency
        // paths.
        //
        //"prefixfree": "3rdparty/prefixfree.min",
        //"modernizr": "3rdparty/modernizr-2.0.6",
        //"jquery.anythingslider": "3rdparty/jquery.anythingslider",
        //"jquery.autoSuggest": "3rdparty/jquery.autosuggest",
        //"jquery.form": "lib/jquery.form/jquery.form",
        //"jquery.placeholder": "3rdparty/jquery.placeholder",
        //"jquery.tools": "3rdparty/jquery.tools.min"
    // },
    // shim: {
    //     "jquery.form": {
    //         deps: ["jquery"],
    //         exports: "jQuery.fn.ajaxSubmit"
    //     },

    //     "jquery.anythingslider": {
    //         deps: ["jquery"],
    //         exports: "jQuery.fn.anythingSlider"
    //     },
    //     "jquery.autoSuggests": {
    //         deps: ["jquery"],
    //         exports: "jQuery.fn.autoSuggest"
    //     },
    //     "jquery.placeholder": {
    //         deps: ["jquery"],
    //         exports: "jQuery.fn.placeholder"
    //     },
    //     "jquery-ext": {
    //         deps: ["jquery"],
    //         exports: "jQuery.fn.simplePlaceholder"
    //     }
    }
});


define([
    'require',
    'jquery',
    './3rdparty/prefixfree',
    './3rdparty/modernizr-2.0.6',
    './core/init',
    './patterns/autofocus',
    './patterns/autoload',
    './patterns/autosubmit',
    './patterns/autosuggest',
    './patterns/breadcrumbs',
    './patterns/carousel',
    './patterns/checkedflag',
    './patterns/checklist',
    './patterns/chosen',
    './patterns/collapsible',
    './patterns/depends',
    './patterns/edit-tinymce',
    './patterns/expandable',
    './patterns/floatingpanel',
    './patterns/focus',
    './patterns/fullcalendar',
    './patterns/inject',
    './patterns/menu',
    './patterns/modal',
    './patterns/navigation',
    './patterns/old_modal',
    './patterns/placeholder',
    './patterns/selfhealing',
    './patterns/setclass',
    './patterns/sorting',
    './patterns/switch',
    './patterns/toggle',
    './patterns/tooltip',
    './patterns/validate',
    './patterns/zoom'
], function(require, $) {
    var mapal = require('./core/init');

    // Register these so data-injection can execute actions from these patterns
    mapal.patterns.floatingPanelContextual = require('./patterns/floatingpanel');
    mapal.patterns.modal = require('./patterns/old_modal');
    mapal.patterns.selfHealing = require('./patterns/selfhealing');

    $(document).on('inject.patterns.scan', function(ev, opts) {
        mapal.initContent(ev.target, opts);
        $(ev.target).trigger('patterns-inject-scanned', opts);
    });

    // wait for the DOM to be ready and initialize
    $(document).ready(function(){
        mapal.init();
        mapal.initContent(document.body);
        $(document).trigger("setupFinished", document);
    });

    return mapal;
});
