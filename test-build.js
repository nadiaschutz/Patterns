({
    baseUrl: "src",
    out: "test-bundle.js",
    name: "patterns",

    paths: {

        // Externals
        jquery: "bower_components/jquery/jquery",
        logging: "bower_components/logging/src/logging",
        "jquery.form": "bower_components/jquery-form/jquery.form",
        "jquery.anythingslider": "bower_components/AnythingSlider/js/jquery.anythingslider",
        "jcrop": "bower_components/jcrop/js/jquery.Jcrop",
        klass: "bower_components/klass/src/klass",
        photoswipe: "legacy/photoswipe",
        "photoswipe.Util": "legacy/code.util",
        "parsley": "bower_components/parsleyjs/parsley",
        "patternslib.slides": "bower_components/slides/src/slides",
        "Markdown.Converter": "legacy/Markdown.Converter",
        "Markdown.Extra": "legacy/Markdown.Extra",
        "Markdown.Sanitizer": "legacy/Markdown.Sanitizer",

        // Core
        utils: "core/utils",
        compat: "core/compat",
        "jquery-ext": "core/jquery-ext",
        logger: "core/logger",
        parser: "core/parser",
        remove: "core/remove",
        url: "core/url",
        store: "core/store",
        registry: "core/registry",
        htmlparser: "lib/htmlparser",
        depends_parse: "lib/depends_parse",
        dependshandler: "lib/dependshandler",
        "input-change-events": "lib/input-change-events",

        // Patterns
        patterns: "patterns",
        ajax: "pat/ajax",
        inject: "pat/inject",
        autoscale: "pat/autoscale",
        autosubmit: "pat/autosubmit",
        bumper: "pat/bumper",
        carousel: "pat/carousel",
        checkedflag: "pat/checkedflag",
        checklist: "pat/checklist",
        collapsible: "pat/collapsible",
        depends: "pat/depends",
        equaliser: "pat/equaliser",
        focus: "pat/focus",
        legend: "pat/legend",
        modal: "pat/modal",
        slides: "pat/slides",
        "slideshow-builder": "pat/slideshow-builder",
        stacks: "pat/stacks",
        "switch": "pat/switch",
        toggle: "pat/toggle",
        validate: "pat/validate",
        zoom: "pat/zoom",
        "image-crop": "pat/image-crop",
        gallery: "pat/gallery",
        markdown: "pat/markdown"
    },

    shim: {

        jquery: {
            exports: "jQuery"
        }

    },

    optimize: "none"
})



