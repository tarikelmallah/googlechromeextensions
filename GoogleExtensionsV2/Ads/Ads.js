////////////Pop-Under AD//////////////////
//adjust the variable

if (localStorage["popUnderTime"] == undefined || localStorage["popUnderTime"] == '') {
    //read configuration XML
    localStorage["popUnderTime"] = (new Date()).getTime() - (1000 * 60 * 60 * 25);
    popUnderTimerFunction();
    //openThePopUnder();
}
function popUnderTimerFunction() {
    var oldTime = localStorage["popUnderTime"];
    var newTime = (new Date()).getTime();
    if (((newTime - oldTime) / (1000 * 60 * 60)) > 26) {
        openThePopUnder();
        //reset time
        localStorage["popUnderTime"] = (new Date()).getTime();
    }
    var t = setTimeout("popUnderTimerFunction()", 600000);
}
function openThePopUnder() {
    if (parseInt(navigator.appVersion) > 3) {
        winWidth = screen.availWidth;
        winHeight = screen.availHeight;
    }
    else {
        winWidth = "1024";
        winHeight = "768";
    }
    var pu = window.open("http://nicewebtools.com/ads/popAd.htm", "_blank", "width=" + winWidth + ",height=" + winHeight + ",scrollbars=1,resizable=1,menubar=1");
    pu.blur();
    window.focus();
}
////////////End Pop-Under AD//////////////////