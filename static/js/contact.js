$(document).ready(function() {
    $("#cntct-btn").on("click", function(e) {
        e.preventDefault();
        
        var nameInputID = "#cntct-nm"
        var surnameInputID = "#cntct-srnm";
        var messageInputID = "#cntct-msg";
        var emailInputID = "#cntct-eml";

        var nameInput = $(nameInputID);
        var surnameInput = $(surnameInputID);
        var emailInput = $(emailInputID);
        var messageInput = $(messageInputID);
        var formInput = "main > .sct-bg > .sct > .cntnt-bg > .cntnt > .bd-bg > .bd > .clmn-bg > .clmn > .frm-bg > .frm";

        var name = nameInput.val();
        var surname = surnameInput.val();
        var email = emailInput.val();
        var message = messageInput.val();

        let error = false;

        function findForm(id) {
            return $(`${formInput}:has(${id})`)
        }

        function sendError(id) {
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
                    nameInput.val('');
                    surnameInput.val('');
                    emailInput.val('');
                    messageInput.val('');
                },
                error: function (xhr, status, error) {
                    console.error('Error:', error);
                },
            });
        }
    });
});