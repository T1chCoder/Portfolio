$(document).ready(function () {
    var isAnimating = false;

    function updateNavHeight() {
        if ($("#nvbr-chckbx").prop("checked")) {
            $("nav").css("height", $(window).height() - $("header").height()).css("background-color", "var(--bg-clr-5)");
        } else {
            $("nav").removeAttr("style");
        }
    }

    function handleAnimation() {
        if (isAnimating) return;

        isAnimating = true;

        if ($("#nvbr-chckbx").prop("checked")) {
            $("label[for='nvbr-chckbx']").addClass("opnd");
            $("#nvbr").removeClass("anmt");
            updateNavHeight();
            setTimeout(function () {
                isAnimating = false;
            }, 350);
        } else {
            $("label[for='nvbr-chckbx']").removeClass("opnd");
            $("#nvbr").addClass("anmt");
            setTimeout(function () {
                $("nav").removeAttr("style");
                isAnimating = false;
            }, 350);
        }
    }

    $("#nvbr-chckbx").change(handleAnimation);

    $("label[for='nvbr-chckbx']").on("click touchstart", function (e) {
        if (isAnimating) {
            e.preventDefault();
        } else {
            var checkbox = $("#nvbr-chckbx");
            checkbox.prop("checked", !checkbox.prop("checked"));
            handleAnimation();
        }
    });

    $(window).resize(function () {
        updateNavHeight();
    });

    $("html").click(function() {
        if ($("#nvbr-chckbx").prop("checked")) {
            $("#nvbr-chckbx").click();
        }
    });
});