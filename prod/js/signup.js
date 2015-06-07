function showSignup() {
    var body = 
        "<div class='popup-container'><table>" +
        "<tr><td><strong>Credentials</strong></td></tr>" + 
        "<tr><td><input type='text' id='signup-username' placeholder='Username'/></td></tr>" + 
        "<tr><td><input type='password' id='signup-passwd' placeholder='Password'/></td></tr>" + 
        "<tr><td><input type='password' id='signup-confirm-passwd' placeholder='Confirm Password'/></td></tr>" + 
        "<tr><td><strong>Contact Info</strong></td></tr>" + 
        "<tr><td><input type='text' id='signup-email' placeholder='Email'/></td></tr>" + 
        "<tr><td><input type='text' id='signup-confirm-email' placeholder='Confirm Email'/></td></tr>" + 
        "</table></div>" +
        "<input type='button' class='popup-main-button' onclick='signupUser()' value='Submit'/>" + 
        "<input type='button' class='popup-main-button' onclick='hidePopup()' value='Cancel'/>"; 
    setPopupHeader("Sign Up");
    setPopupMain(body);
    setPopupSize(300);
    showPopup();
};
