$(document).ready(function() {
    $("#cntct-btn").on("click", function(e) {
        e.preventDefault();
        
        var nameInputID = "#cntct-nm"
        var surnameInputID = "#cntct-srnm";
        var messageInputID = "#cntct-msg";
        var emailInputID = "#cntct-eml";
        var buttonInputID = "#cntct-btn";

        var nameInput = $(nameInputID);
        var surnameInput = $(surnameInputID);
        var emailInput = $(emailInputID);
        var messageInput = $(messageInputID);
        var buttonInput = $(buttonInputID);
        var formInput = "main > .sct-bg > .sct > .cntnt-bg > .cntnt > .bd-bg > .bd > .clmn-bg > .clmn > .frm-bg > .frm";

        var name = nameInput.val();
        var surname = surnameInput.val();
        var email = emailInput.val();
        var message = messageInput.val();

        var loadingIcon = "./static/images/contact/loading.svg";
        var successIcon = "./static/images/contact/success.svg";

        var icon = $(this).find(".bd-bg > .bd > .icn > span");

        buttonInput.addClass("ld");
        icon.css("background-image", `url(${loadingIcon})`)

        let error = false;

        function findForm(id) {
            return $(`${formInput}:has(${id})`)
        }

        function sendError(id) {
            if (buttonInput.hasClass("ld")) {
                buttonInput.removeClass("ld")
            }

            error = true;
            findForm(id).addClass("alrt");
        }

        function removeError(id) {
            findForm(id).removeClass("alrt");
        }

        function isValidEmail(email) {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
        }

        if (!name) {
            sendError(nameInputID);
        }
        else {
            removeError(nameInputID);
        }
        
        if (!email || !isValidEmail(email)) {
            sendError(emailInputID);
        }
        else {
            removeError(emailInputID);
        }

        if (!message) {
            sendError(messageInputID);
        }
        else {
            removeError(messageInputID);
        }

        if (!error) {
            if (surname) {
                var name = `${name} ${surname}`;
            }

            $.ajax({
                url: 'https://formspree.io/f/mlddaenj',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    email: email,
                    name: name,
                    message: message
                }),
                success: function (response) {
                    buttonInput.removeClass("ld");
                    icon.removeAttr("style");
                    buttonInput.addClass("scs");
                    icon.css("background-image", `url(${successIcon})`)
                    nameInput.val('');
                    surnameInput.val('');
                    emailInput.val('');
                    messageInput.val('');
                    $(".sct-bg > .sct > .cntnt-bg > .cntnt > .bd-bg > .bd > .clmn-bg > .clmn > .frm-bg > .frm").removeClass("actv");
                    setTimeout(function() {
                        buttonInput.removeClass("scs");
                        icon.removeAttr("style");
                    }, 2000);
                },
                error: function (xhr, status, error) {
                    buttonInput.removeClass("ld");
                    icon.removeAttr("style");
                }
            });
        }
    });
});