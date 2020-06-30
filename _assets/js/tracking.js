var trackItemFromCurrentPage = function (category, action) {
    trackItem(category, action, window.location.href);
};

var trackItem = function (category, action, label) {
    dataLayer.push({
        'event': 'virtualEvent',
        'eventCategory': category,
        'eventAction': action,
        'eventLabel': label,
    });
};
