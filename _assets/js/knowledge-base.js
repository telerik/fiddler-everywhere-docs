//= require search-base
var DEFAULT_KB_QUERY = "knowledge base";

function trackSearchResult(link) {
    trackItem("docs-kb-search-results", searchTerms, link);
}

function getSearchQuery() {
    return $('input[name="q"]').val() || DEFAULT_KB_QUERY;
}

function attachToEvents() {
    $('input[name="q"].kb-search').keydown(function (e) {
        if (e.keyCode == 13) { // Enter
            var $this = $(this);
            searchInternal($this);
            $("#results").data('kendoListView').dataSource.read();
            return true;
        }
    });

    $("div#results").on("click", "a", function (e) {
        trackSearchResult($(this).attr("href"));
    });
}

function getSearchCategory() {
    return "docs-kb-search-terms";
}

function getDataSource() {
    return new kendo.data.DataSource({
        transport: {
            parameterMap: function (data) {
                return {
                    start: 1 + data.skip,
                    num: data.pageSize,
                    cx: gcsInstance,
                    sort: searchViewModel.isInitialized ? '' : 'date',
                    key: gcsKey,
                    q: getSearchQuery() + searchViewModel.getFilterExpression(),
                };
            },
            read: {
                url: GCSE_API_URL
            }
        },
        change: function () {
            var resultsPresent = this.data().length > 0;
            $("#search-container").toggle(resultsPresent);
            $("#no-results").toggle(!resultsPresent);

            setSideNavPosition();
        },
        serverPaging: true,
        pageSize: 10,
        schema: {
            type: "json",
            data: function (data) {
                if (parseInt(data.searchInformation.totalResults) === 0) {
                    return [];
                }

                return data.items.filter(function (item) {
                    return !item.link.match(/(.*)knowledge-base(.html){0,}$/);
                }).map(function (item) {
                    return {
                        title: item.htmlTitle,
                        url: item.link,
                        excerpt: item.htmlSnippet
                    };
                });
            },
            total: function (data) {
                return data.searchInformation.totalResults;
            }
        }
    });
}
