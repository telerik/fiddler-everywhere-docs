function animateScrolling(hash) {
    var currentScrollTop = $(window).scrollTop();
    var offset = $(hash).offset() || { top: currentScrollTop };
    var scrollOffsetCorrection = currentScrollTop == 0 ? HEADER_HEIGHT + NAVBAR_HEIGHT : NAVBAR_HEIGHT;

    $('html, body').animate({
        scrollTop: offset.top - scrollOffsetCorrection
    }, 500, function () {
        if (history.pushState) {
            history.pushState(null, null, hash);
        } else {
            window.location.hash = hash;
        }
    });
}
