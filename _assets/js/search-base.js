var PAGE_FILTER = " more:pagemap:metatags-restype:";
var GCSE_ELEMENT_NAME = "google-search";
var GCSE_API_URL = "https://www.googleapis.com/customsearch/v1";
var searchTerms = "";
var searchItemsStorageKey = "searchItemsStorageKey";
var siteHasKbPortal, isKbPage, isKbPortalRoot, hasApiReference;

var searchViewModel = kendo.observable({
    isInitialized: false,
    kb: false,
    documentation: false,
    api: false,
    label: "",
    filterValues: [],
    getFilter: function () {
        var filterExpression = '';
        for (var i = 0; i < this.filterValues.length; i++) {
            if (filterExpression !== '') {
                filterExpression += ',';
            }

            filterExpression += this.filterValues[i];
        }

        return filterExpression;
    },
    getFilterExpression: function () {
        var filter = this.getFilter();
        return filter !== '' ? PAGE_FILTER + filter : '';
    },
    updateLabel: function () {
        var label = "";
        this.filterValues = [];

        if ((this.kb && this.documentation && this.api) || (!this.kb && !this.documentation && !this.api)) {
            label = "Search all";
        } else {
            if (this.documentation) {
                label += "DOCS";
                this.filterValues.push('documentation');
            }

            if (this.kb) {
                label += (label ? " / " : "") + "KB";
                this.filterValues.push('kb');
            }

            if (this.api && hasApiReference) {
                label += (label ? " / " : "") + "API";
                this.filterValues.push('api');
            }

            label = "Search in " + label;
        }

        this.set("label", label);
    },
    getLocalStorageKey: function () {
        return searchItemsStorageKey + gcsInstance;
    },
    update: function () {
        this.updateLabel();
        localStorage.setItem(this.getLocalStorageKey(), JSON.stringify(this.filterValues));
        updateSearchLayout();

    },
    init: function () {
        var propertyNames = JSON.parse(localStorage.getItem(this.getLocalStorageKey()));
        if (!propertyNames || isKbPortalRoot) {
            propertyNames = [];

            if (isKbPage || isKbPortalRoot) {
                propertyNames.push('kb');
            } else {
                propertyNames.push('documentation');
                if (hasApiReference) {
                    propertyNames.push('api');
                }

                if (siteHasKbPortal) {
                    propertyNames.push('kb');
                }
            }

            if (!isKbPortalRoot) {
                localStorage.setItem(this.getLocalStorageKey(), JSON.stringify(propertyNames));
            }
        }

        for (var i = 0; i < propertyNames.length; i++) {
            searchViewModel.set(propertyNames[i], true);
        }

        searchViewModel.updateLabel();
    }
});

function init() {
    var popup = $("#refine-search-popup").kendoPopup({
        anchor: $("#refine-search-container"),
        origin: "bottom right",
        position: "top right",
    }).data("kendoPopup");

    $("#refine-search-button").on("click", function () {
        popup.toggle();
    });

    searchViewModel.init();

    kendo.bind($(".search-input-container"), searchViewModel);
    kendo.bind($("#refine-search-popup"), searchViewModel);

    $(".custom-checkbox input[type='checkbox']").change(function () {
        searchViewModel.update();
    });

    attachToEvents();
    updateSearchLayout();
}

function attachToEvents() { }

function search(input) {
    searchTerms = input.val();
    trackSearchQuery(searchTerms);
}

function trackSearchQuery(query) {
    trackItem(getSearchCategory(), prd, query);
}

function getSearchCategory() { }

function searchInternal(input) {
    closePopup();
    search(input);
}

function closePopup() {
    var popup = $("#refine-search-popup").data("kendoPopup");
    popup.close();
}

function updateSearchLayout() {
    $('#local-search').css('padding-right', $('#refine-search-button').outerWidth());
}

function getDataSource() { }

$(function () {
    init();

    var ds = getDataSource();

    $("#results").kendoListView({
        dataSource: ds,
        template: $("#results-template").html(),
        dataBound: function () {
            window.scrollTo(0, 0);
            setSideNavPosition();
        }
    });

    $(".site-pager").kendoPager({
        dataSource: ds,
        buttonCount: 5,
        responsive: false,
        messages: {
            previous: "Previous",
            next: "Next",
            display: "",
            empty: ""
        }
    });

    $(".results-message").kendoPager({
        dataSource: ds,
        numeric: false,
        previousNext: false,
        responsive: false,
        messages: {
            display: "{0}-{1} of {2} results",
            empty: "Sorry, there were no results found. Maybe try a broader search."
        }
    });

    setSideNavPosition();
    searchViewModel.isInitialized = true;
});
