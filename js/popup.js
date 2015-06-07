/* Globals */
var popupBody;
var popupBackdrop;
var popupHeader;
var popupMain;

var popupShown;

function initPopup() {
    var popup =
        "<div id='popup-backdrop'>" +
        "<div id='popup-body'>" +
        "<h2 id='popup-header'></h2>" +
        "<div id='popup-main'></div>" +
        "</div>" +
        "</div>";
    $("body").append(popup);
    popupBody = $("#popup-body");
    popupBackdrop = $("#popup-backdrop");
    popupHeader = $("#popup-header");
    popupMain = $("#popup-main");
    popupShown = false;
}

function showPopup() {
    var twidth = popupBody.width();
    var theight = popupBody.height();
    popupBody.css("margin-top", parseInt(-theight / 2) + "px");
    popupBody.css("margin-left", parseInt(-twidth / 2) + "px");
    if (!popupShown) {
        popupShown = true;
        popupBackdrop.css("visibility", "visible");
        popupBackdrop.animate({
            opacity: 1.0
        }, 300);
    }
}

function hidePopup() {
    if (popupShown) {
        popupBackdrop.css("visibility", "visible");
        popupBackdrop.animate({
            opacity: 0.0
        }, 300, function() {
            popupBackdrop.css("visibility", "hidden");
        });
        popupShown = false;
    }
}

function setPopupSize(width) {
    popupBody.css("width", width + "px");
}

function setPopupHeader(text) {
    popupHeader.text(text);
}

function setPopupMain(main) {
    popupMain.html(main);
}

function displayMessage(header, message, dismiss, script) {
    setPopupHeader(header);
    var body = ""
    if (message) {
        body = 
            "<div class='popup-container'>" + message + "</div>";
    }
    if (dismiss) {
        body += "<input type='button' class='popup-main-button' onclick='hidePopup();" + script + "' value='Dismiss'/>";
    }
    setPopupMain(body);
    setPopupSize(400);
    showPopup();
}

function displayError(error, script) {
    displayMessage("Something went wrong...", 
           "<p>It seems a \"" + error + "\" error has occured.</p>" +
           "<p>Please try again or <a href=''>let us know</a>.</p>", 
           true, script);
    if (typeof trackJs !== 'undefined') {
        trackJs.track(error);
    }
}
