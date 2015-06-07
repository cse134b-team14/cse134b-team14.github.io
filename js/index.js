function signupUser() {

    var user = new Parse.User();
    var username = $("#signup-username").val();
    var password = $("#signup-passwd").val();
    var confirmPasswd = $('#signup-confirm-passwd').val();

    var email = $('#signup-email').val();
    var confirmEmail = $('#signup-confirm-email').val();

    if(validateForm(username, password, confirmPasswd, email, confirmEmail)){
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);
        displayMessage("Signing you up...");
        user.signUp(null, {
            success: function(user) {
                displayMessage("Success!", "You have been signed up!", true);
            },
            error: function(user, error) {
                displayError(error.message);
            }
        });
    }
}

/* Form Validation: Checks if form to see if input is valid. If yes, user sign up proceeds. If not, user is prompted with
 * an error message to fix their email.
 */
function validateForm(username, password, confirmPasswd, email, confirmEmail) {
    var regExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
    if(username == ""){
        displayError("invalid username")
        return false;
    } else if(password != confirmPasswd){
        displayError("password fields do not match");
        return false;
    } else if(password == ""){
        displayError("password field is empty");
        return false;
    } else if(email == "" || !regExpression.test(email)){
        displayError("invalid email");
        return false;
    } else if(email != confirmEmail){
        displayError("email fields do not match");
        return false;
    }

    return true;
}



function loginUser() {
    var username = $("#username").val();
    var password = $("#passwd").val();
    displayMessage("Logging You In!");
    Parse.User.logIn(username, password, {
        success: function (user) {
            window.location.href = "main.html";
        },
        error: function (user, error) {
            displayError(error.message);
        }
    });
}

function loginUserFacebook() {
    displayMessage("Logging You In!");
    Parse.FacebookUtils.logIn(null, {
        success: function (user) {
            window.location.href = "main.html";
        },
        error: function (user, error) {
            displayError(error.message);
        }
    });
}

$(document).ready(function() {
    initPopup();
});
