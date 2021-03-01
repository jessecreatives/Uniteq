$(function () {
    var $w = $(window);
    // header
    var $headers = $(".header");
    if ($w.scrollTop() > 500) {
        // display header with bg
        $headers.each(function () {
            if (!$(this).hasClass("scroll")) {
                $(this).addClass(".scroll");
            }
        });
    }
    $w.scroll(function () {
        $headers.each(function () {
            if ($w.scrollTop() > 500) {
                // display header with bg
                if (!$(this).hasClass("scroll")) {
                    $(this).addClass("scroll");
                }
            } else {
                $(this).removeClass("scroll");
            }
        });
        
    });
});