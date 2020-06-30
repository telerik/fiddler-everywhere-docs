//= require codemirror/codemirror.min.js

var dojoApi = (function($) {
    var dojoApi = {
        configuration: {
            url: "https://dojo.telerik.com/",
            currentKendoVersion: kendo.version
        },
        post: function (snippet) {
            if (!snippet.match(/<html>/i)) {
                snippet = dojoApi.wrapInHtml(snippet);
            }
            snippet = dojoApi.fixLineEndings(snippet);
            var form = $('<form method="post" style="display: none;" target="_blank" action="' + dojoApi.configuration.url + '" />').appendTo(document.body);
            $("<input name='snippet'>").val(window.btoa(encodeURIComponent(snippet))).appendTo(form);

            form.submit();
        },
        fixLineEndings: function (code) {
            return code.replace(/\n/g, "&#10;");
        },
        showHintButton: function (element, text) {
            element = $(element);

            $("<button type='button'>")
            .text(text)
            .addClass("btn btn-action dojo-submit-button")
            .insertBefore(element);
        },
        wrapInHtml: function(snippet) {
            var angular = '    <script src="https://kendo.cdn.telerik.com/kendo-version/js/angular.min.js"></script>\n';
            var jszip = '    <script src="https://kendo.cdn.telerik.com/kendo-version/js/jszip.min.js"></script>\n';

            if (!(/ng-app/i).test(snippet)) {
                angular = '';
            }

            if (!(/ooxml|excel|spreadsheet/i).test(snippet)) {
                jszip  = '';
            }

            var result = ('<!DOCTYPE html>\n'+
                '<html>\n'+
                '<head>\n'+
                '    <meta charset="utf-8"/>\n'+
                '    <title>Kendo UI Snippet</title>\n\n'+
                '    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/kendo-version/styles/kendo.default-v2.min.css"/>\n\n'+
                '    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>\n'+
                angular + jszip +
                '    <script src="https://kendo.cdn.telerik.com/kendo-version/js/kendo.all.min.js"></script>\n'+
                '</head>\n'+
                '<body>\n  \n'+
                snippet+ '\n' +
                '</body>\n'+
            '</html>').replace(/kendo-version/g, kendo.version);
        return result;
        },

        addButtons: function(element) {
            if (!$(element).parent().prev().is(".action-buttons")) {
                $('<div class="action-buttons">'+
                 '<button class="btn btn-edit" title="Edit example">Edit</button>'+
                 '<button class="btn btn-run" title="Run example">Preview</button>'+
                 '<a href="https://dojo.telerik.com" class="btn btn-dojo" title="Open example in Kendo UI Dojo">Open In Dojo</a>'+
                 '</div>').insertBefore(element);
            }
        },
        editSnippet: function(element) {
            reset();

            var pre = $(element).parent().nextAll("pre:first");

            if (isCodeMirrorCurrent(pre)) {
                showCodeMirror();
            } else {
                destroyCodeMirror();
                createCodeMirror(pre);
            }

            pre.hide();

            $(element).addClass("active-button");
            $(element).next().removeClass("active-button");

            setSideNavPosition();
        },
        runSnippet: function(element) {
            reset();

            var pre = $(element).parent().nextAll("pre:first");

            var iframe = $('<iframe class="snippet-runner">').attr("src", 'javascript:""');


            var snippet = null;

            if (isCodeMirrorCurrent(pre)) {
                snippet = codemirror.getValue();
                hideCodeMirror();
                iframe.show().insertAfter(codemirror.display.wrapper);
            } else {
                snippet = pre.text();
                destroyCodeMirror();
                iframe.show().insertAfter(pre);
            }

            iframe.on("load", function() {
                iframe.height(iframe.contents().height());
            });

            pre.hide();

            snippet = snippet.replace(/<script>(.*?)<\/script>/, "<script>try { $1 } catch(e) { document.write(e.toString()); }</script>");

            var html = template({ version: kendo.version, snippet: snippet, html: /<html>/i.test(snippet) });

            var contents = iframe.contents();

            contents[0].open();
            contents[0].write(html);
            contents[0].close();

            $(element).addClass("active-button");
            $(element).prev().removeClass("active-button");

            setSideNavPosition();
        },

        openSnippet: function(element) {
            var snippet = null;

            var pre = $(element).parent().nextAll("pre:first");

            if (isCodeMirrorCurrent(pre)) {
                snippet = codemirror.getValue();
            } else {
                snippet = pre.text();
            }

            dojoApi.post(snippet);
        }
    };

    var template = kendo.template(
        '# if (!html) { #<!doctype html>' +
            '<html>' +
            '<head>' +
            '<meta charset="utf-8"/>' +
            '<meta http-equiv="X-UA-Compatible" content="IE=edge"/>' +
            '<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"/>' +
            '<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>' +
            '<style>' +
            'body {' +
                'font-family: Helvetica, Arial, sans-serif;' +
            'font-size: 14px' +
            '}' +
            '</style>' +
            '<link rel="stylesheet" href="https://kendo.cdn.telerik.com/${version}/styles/kendo.default-v2.min.css">' +
            '<script src="https://kendo.cdn.telerik.com/${version}/js/jszip.min.js"></script>' +
            '# if ((/ng-app/i).test(snippet)) { # <script src="https://kendo.cdn.telerik.com/${version}/js/angular.min.js"></script> # } #' +
            '<script src="https://kendo.cdn.telerik.com/${version}/js/kendo.all.min.js"></script>' +
            '<script src="https://kendo.cdn.telerik.com/${version}/js/kendo.timezones.min.js"></script>' +
            '# } #<script>' +
            'if (typeof kendo !== "undefined") kendo.mobile.Application.prototype.options.browserHistory = false;' +
            'window.onerror = function(message, url, line) {' +
                'document.write("<span style=\\"color:red;font-family:monospace\\">" + message + " at line " + line + "</span>");' +
            '};' +
            'window.onunload = function() {' +
                'kendo.destroy(document.body);' +
            '};' +
            '</script>' +
            '# if (!html) { #</head>' +
            '<body>' +
            '# } # #= snippet #' +
            '# if (!html) { #</body>' +
            '</html> # } #'
    );

    var codemirror = null;

    function destroyCodeMirror() {
        if (codemirror) {
            $(codemirror.display.wrapper).remove();
            codemirror = null;
        }
    }

    function hideCodeMirror() {
        if (codemirror) {
            $(codemirror.display.wrapper).hide();
        }
    }

    function showCodeMirror() {
        if (codemirror) {
            $(codemirror.display.wrapper).show();
        }
    }

    function createCodeMirror(pre) {
        codemirror = CodeMirror(function(element) {
            $(element).insertAfter(pre);
        }, {
            value: pre.text(),
            scrollbarStyle: "null",
            lineNumbers: true,
            mode: "htmlmixed"
        });
    }

    function isCodeMirrorCurrent(pre) {
        return codemirror && codemirror.display.wrapper.previousSibling === pre[0];
    }

    function reset() {
        $("pre.prettyprint").show();
        $(".snippet-runner").remove();
        $(".btn-edit").removeClass("active-button");
        $(".btn-run").removeClass("active-button");
    }

    return dojoApi;
})(jQuery);

$(function(){
    $("body").find(".prettyprint[data-lang=dojo]").each(function() {
        if (this.parentNode.className.indexOf("k-content") < 0) {
            dojoApi.addButtons(this);
        }
    });
    
    // Add Dojo to all API javascript reference code-snippets
    $("body article.api-reference.javascript").find(".prettyprint").not("[data-lang=pseudo]").each(function() {
        dojoApi.addButtons(this);
    });
        

    $("body").on("click", ".btn-edit", function(e) {
        e.preventDefault();

        dojoApi.editSnippet(this);
    });

    $("body").on("click", ".btn-run", function(e) {
        e.preventDefault();

        dojoApi.runSnippet(this);
    });

    $("body").on("click", ".btn-dojo", function(e) {
        e.preventDefault();

        dojoApi.openSnippet(this);
    });
});
