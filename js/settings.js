function showSettings() {
    setPopupHeader("Settings");
    setPopupMain(
            "<input type='button' class='popup-main-button' onclick='showUserSettings();' value='User Settings'/>" +
            "<input type='button' class='popup-main-button' onclick='showUpdateEmail();' value='Update Email'/>" +
            "<input type='button' class='popup-main-button' onclick='showUpdatePassword();' value='Update Password'/>" +
            "<input type='button' class='popup-main-button' onclick='logout();' value='Logout'/>" +
            "<input type='button' class='popup-main-button' onclick='hidePopup();' value='Cancel'/>" 
            );
    setPopupSize(300);
    showPopup();
}

function showUpdatePassword() {
    setPopupMain(
            "<div class='popup-container'><table>" +
            "<tr><td><input type='password' id='signup-passwd' placeholder='Password'/></td></tr>" + 
            "<tr><td><input type='password' id='signup-confirm-passwd' placeholder='Confirm Password'/></td></tr>" + 
            "</table></div>" +
            "<input type='button' class='popup-main-button' onclick='updatePassword();' value='Submit'/>" +
            "<input type='button' class='popup-main-button' onclick='showSettings();' value='Cancel'/>"
            );
    setPopupHeader("Update Password");
    setPopupSize(300);
    showPopup();
}

function updatePassword() {
    var password = $("#signup-passwd").val();
    var confirmPasswd = $('#signup-confirm-passwd').val();
    if(password != confirmPasswd) {
        displayError("password fields do not match");
        return;
    } else if(password == "") {
        displayError("password field is empty");
        return;
    }
    var user = Parse.User.current();
    user.set("password", password);
    user.save(null, {
        success: function(user) {
                displayMessage("Success!", "Password updated!", true);
        },
        error: function(user, error) {
            displayError(error.message);
        }
    });
}

function showUpdateEmail() {
    setPopupMain(
            "<div class='popup-container'><table>" +
            "<tr><td><input type='text' id='signup-email' placeholder='Email'/></td></tr>" + 
            "<tr><td><input type='text' id='signup-confirm-email' placeholder='Confirm Email'/></td></tr>" + 
            "</table></div>" +
            "<input type='button' class='popup-main-button' onclick='updateEmail();' value='Submit'/>" +
            "<input type='button' class='popup-main-button' onclick='showSettings();' value='Cancel'/>"
            );
    setPopupHeader("Update Email");
    setPopupSize(300);
    showPopup();
}


function updateEmail() {
    var email = $("#signup-email").val();
    var confirmEmail = $("#signup-confirm-email").val();
    var regExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(email == "" || !regExpression.test(email)) {
        displayError("invalid email");
        return false;
    } else if(email != confirmEmail) {
        displayError("email fields do not match");
        return false;
    }
    var user = Parse.User.current();
    user.set("email", email);
    user.save(null, {
        success: function(user) {
                displayMessage("Success!", "Email updated!", true);
        },
        error: function(user, error) {
            displayError(error.message);
        }
    });
}

function showUserSettings() {
    var color = Parse.User.current().get("backColor");
    if (!color) {
        color = "";
    }
    setPopupMain(
            "<div class='popup-container'><table>" +
            "<tr><td><strong>Background Color</strong></td></tr>" + 
            "<tr><td><input type='text' id='ui-color' placeholder='#RRGGBB' value='" + color + "'/></td></tr>" + 
            "</table></div>" +
            "<tr><td><strong>Background Color</strong></td></tr>" + 
             "<p> blag lafawdawda </p>" +
            //"<center><a href="" onmouseover=" + color +"='black'>Black</a>" + 
            //"<a href="" onclick=" + color + "='red'>Red</a>" +
            //"<a href="" onclick=" + color + "='blue'>Blue</a>" +
            //"<a href="" onclick=" + color + "='yellow'>Yellow</a></center>" +
            "<input type='button' class='popup-main-button' onclick='updateUserSettings();' value='Submit'/>" +
            "<input type='button' class='popup-main-button' onclick='showSettings();' value='Cancel'/>"
            );
    setPopupHeader("User Settings");
    setPopupSize(300);
    showPopup();
}

function updateUserSettings() {
    var color = $('#ui-color').val();
    var user = Parse.User.current();
    user.set("backColor", color);
    user.save(null, {
        success: function(user) {
                displayMessage("Success!", "Color updated!", true);
                applySettings();
        },
        error: function(user, error) {
            displayError(error.message);
        }
    });
}

function applySettings() {
    var color = Parse.User.current().get("backColor");
    if (color) {
        $("body").css("background", color);
    }
}
