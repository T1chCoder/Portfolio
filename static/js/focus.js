$(document).ready(function() {
    $(".sct-bg > .sct > .cntnt-bg > .cntnt > .bd-bg > .bd > .clmn-bg > .clmn > .frm-bg > .frm > .inpt, main > .sct-bg > .sct > .cntnt-bg > .cntnt > .bd-bg > .bd > .clmn-bg > .clmn > .frm-bg > .frm > .txt-inpt-bg > .txt-inpt").on("focus", function() {
        $(this).closest(".frm").addClass("fcsd");
    }).on("blur", function() {
        if ($(this).val().length > 0) {
            if (!$(this).closest(".frm").hasClass("actv")) {
                $(this).closest(".frm").addClass("actv");
            }
        }
        else {
            if ($(this).closest(".frm").hasClass("actv")) {
                $(this).closest(".frm").addClass("actv");
            }
        }
        $(this).closest(".frm").removeClass("fcsd");
    });
});