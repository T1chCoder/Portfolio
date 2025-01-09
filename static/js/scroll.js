$(document).ready(function() {
    let lastScrollTop = 0;
    const $header = $("body > .hdr-bg");

    $(window).scroll(function() {
        if ($("#nvbr-chckbx").prop("checked")) {
            $("#nvbr-chckbx").click();
        }
        
        let currentScroll = $(window).scrollTop();

        if (currentScroll > lastScrollTop) {
            $header.css("top", "-100%");
        } else {
            $header.css("top", "0");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});