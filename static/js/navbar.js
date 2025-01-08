$(document).ready(function () {
    var isAnimating = false;

    $("#nvbr-chckbx").change(function () {
        if (isAnimating) return;

        isAnimating = true;

        if (this.checked) {
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
    });

    $("label[for='nvbr-chckbx']").on("click touchstart", function (e) {
        if (isAnimating) {
            e.preventDefault();
        }
    });
});