$(function () {
    var relatedArticlesMarker = $('h1#see-also, h2#see-also, h3#see-also');
    if (relatedArticlesMarker.length) {
        var relatedArticlesList = relatedArticlesMarker.nextAll('ul').first();
        if (relatedArticlesList.length) {
            $('#related-articles').append(relatedArticlesList.html());

            relatedArticlesMarker.remove();
            relatedArticlesList.remove();
        }
    } else {
        $('.related-articles').toggleClass('empty', true);
    }
});
