var curTabwww = null;

chrome.browserAction.onClicked.addListener(function (tab) {

    if (curTabwww == null) {
        creatnewTabWithIP()
    } else {
        try {
            chrome.tabs.get(curTabwww.id, function (tab) {
                if (tab != undefined)
                    chrome.tabs.update(tab.id, { url: "http://nicewebtools.com/WhatIsMyIP.aspx", selected: true });
                else
                    creatnewTabWithIP();
            });
        } catch (ex) { creatnewTabWithIP(); }
    }

});
function creatnewTabWithIP() {
    chrome.tabs.create({ url: "http://nicewebtools.com/WhatIsMyIP.aspx", selected: true }, function (tab) {
        curTabwww = tab
    });
}