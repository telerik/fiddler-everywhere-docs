//= require search-base

function attachToEvents() {
    $('form input[name="q"]').keydown(function (e) {
        if (e.keyCode == 13) { // Enter
            var $this = $(this);
            searchInternal($this);
            $this.parents('form').submit();
            return false;
        }
    });

    $("div#results").on("click", "a", function (e) {
        trackSearchResult($(this).attr("href"));
    });
}

function getSearchCategory() {
    return "docs-search-terms";
}

function trackSearchResult(link) {
    trackItem("docs-search-results", searchTerms, link);
}

function toKV(n) {
    n = n.split("=");
    this[n[0]] = n[1];
    return this;
}

function getDataSource() {
    var params = location.search.replace(/(^\?)/, '').split("&").map(toKV.bind({}))[0];
    searchTerms = decodeURIComponent(params.q ? params.q.replace(/\+/g,' ') : '');
    $("[name=q]").val(searchTerms);

    return new kendo.data.DataSource({
        transport: {
            parameterMap: function (data) {
                return {
                    start: 1 + data.skip,
                    num: data.pageSize,
                    cx: gcsInstance,
                    key: gcsKey,
                    q: params.q + searchViewModel.getFilterExpression(),
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

                return data.items.map(function (item) {
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
