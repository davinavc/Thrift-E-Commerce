$(window).on("scroll", function() {
    if ($(this).scrollTop()) {
        $("#backtotop").fadeIn();
    } else {
        $("#backtotop").fadeOut();
    }
});