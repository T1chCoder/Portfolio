$(document).ready(function () {
    var isAnimating = false;

    function handleAnimation() {
        if (isAnimating) return;

        isAnimating = true;

        if ($("#nvbr-chckbx").prop("checked")) {
            $("#nvbr").removeClass("anmt");
            setTimeout(function () {
                isAnimating = false;
            }, 350);
        } else {
            $("#nvbr").addClass("anmt");
            setTimeout(function () {
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
});