function showSettings() {
    setPopupHeader("Settings");
    setPopupMain(
            "<input type='button' class='popup-main-button' onclick='logout();' value='User Settings'/>" +
            "<input type='button' class='popup-main-button' onclick='logout();' value='Change Email'/>" +
            "<input type='button' class='popup-main-button' onclick='logout();' value='Logout'/>" +
            "<input type='button' class='popup-main-button' onclick='hidePopup();' value='Cancel'/>" 
            );
    setPopupSize(400);
    showPopup();
}


