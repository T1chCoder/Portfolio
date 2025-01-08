$(document).ready(function () {
    $("#nvbr-chckbx").change(function () {
        if (this.checked && $("#nvbr").hasClass("anmt")) {
            $("#nvbr").removeClass("anmt");
        }
        else if (!this.checked && !$("#nvbr").hasClass("anmt")) {
            $("#nvbr").addClass("anmt");
            setTimeout(function () {
                $("#nvbr").removeClass("anmt");
            }, 350);
        }
    });
});