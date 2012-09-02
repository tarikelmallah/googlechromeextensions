/*
Copyright (C) 2010  Federico Trodler.
This software is licensed under the GNU GPL version 2.0.
For more information read the LICENSE file or visit 
http://creativecommons.org/licenses/GPL/2.0/
Contact me at: bubble.translate@gmail.com
*/
google.load("language", "1");
var c = [],
d = [],
f = [],
g = [],
h = [];
function j() {
    if (localStorage.lang) {
        c = JSON.parse(localStorage.lang);
        d = JSON.parse(localStorage.shortcut);
        f = JSON.parse(localStorage.iconClick);
        g = JSON.parse(localStorage.theme);
        chrome.tabs.getAllInWindow(null,
        function (a) {
            for (var b = 0; b < a.length; b++) {
                chrome.tabs.sendRequest(a[b].id, {
                    a: "Conf",
                    d: d,
                    b: g
                });
                if (f[0] == true) chrome.pageAction.hide(a[b].id);
                else {
                    chrome.pageAction.show(a[b].id);
                    chrome.pageAction.setIcon({
                        path: g[5],
                        tabId: a[b].id
                    })
                }
            }
        });
        if (localStorage.version == null || localStorage.version != "1.5" || (localStorage["firstTime5"] == undefined || localStorage["firstTime5"] == '')) {
            chrome.tabs.create({
                url: "preferences.html"
            })
            localStorage["firstTime5"] = '1';
        }
    } else {
        c[0] =
        localStorage.lg && localStorage.lg != "" ? localStorage.lg : "en";
        c[1] = "es";
        c[2] = "es";
        d[0] = localStorage.lg && localStorage.lg != "" ? localStorage.lg : "en";
        d[1] = localStorage.sk && localStorage.sk != "" ? JSON.parse(localStorage.sk) : false;
        d[2] = localStorage.ck && localStorage.ck != "" ? JSON.parse(localStorage.ck) : true;
        d[3] = false;
        d[4] = localStorage.ak && localStorage.ak != "" ? JSON.parse(localStorage.ak) : false;
        f[0] = false;
        f[1] = true;
        f[2] = false;
        f[3] = false;
        g[0] = localStorage.cc && localStorage.cc != "" ? localStorage.cc : "#729FCF";
        g[1] = localStorage.ct &&
        localStorage.ct != "" ? localStorage.ct : "#FFFFFF";
        g[2] = "arial, helvetica, sans-serif";
        g[3] = "13px";
        g[4] = "93";
        g[5] = "16.png";
        localStorage.clear();
        localStorage.lang = JSON.stringify(c);
        localStorage.shortcut = JSON.stringify(d);
        localStorage.iconClick = JSON.stringify(f);
        localStorage.theme = JSON.stringify(g);
        chrome.tabs.create({
            url: "preferences.html"
        })
    }
}
function k(a, b, e) {
    var optionsPage = chrome.extension.getURL("preferences.html");
    if (localStorage.lang != undefined && localStorage.langFrom != undefined) {
        var toLangArr = JSON.parse(localStorage.lang)
        var fromLangArr = JSON.parse(localStorage.langFrom)

        var toLang = toLangArr[0];
        var fromLang = (fromLangArr[0] || 'en');
        var srsTranslateService = (localStorage.srsService || '0');
        var msgForError = "Error - Connection lost, or bad configuration, Please config the Options from <a href='" + optionsPage + "'> Options page </a>, adjust the FROM and TO languages.";

        if (srsTranslateService == '1') {
            $.ajax({
                url: 'http://mymemory.translated.net/api/get?user=tarikelmallah&key=kigXfS4exL2Eg&q=' + escape(a) + '&langpair=' + fromLang + '|' + toLang,
                dataType: 'json',
                success: function (data) {
                    if (data != undefined && data.responseData != undefined && data.responseData.translatedText != undefined) {
                        chrome.tabs.sendRequest(e, {
                            a: "Result",
                            text: ("" + data.responseData.translatedText) == '' ? msgForError : ("" + data.responseData.translatedText),
                            c: b == "ar" || b == "iw" ? "rtl" : "ltr",
                            langF: fromLang,
                            langT: b
                        })
                    }
                },
                error: function (data) {
                    var items = data;
                    chrome.tabs.sendRequest(e, {
                        a: "Result",
                        text: msgForError,
                        c: b == "ar" || b == "iw" ? "rtl" : "ltr",
                        langF: fromLang,
                        langT: b
                    })
                }
            });
        } else {
            $.ajax({
                url: 'http://translate.google.com/translate_a/t',
                type: 'GET',
                data: 'client=x&text=' + encodeURI(a) + '&hl=en&sl=' + (fromLang || 'auto') + '&tl=' + toLang,
                dataType: 'json',
                success: function (data) {
                    var _final = '';
                    $.each(data.sentences, function (k, val) {
                        _final += val.trans;
                    });
                    chrome.tabs.sendRequest(e, {
                        a: "Result",
                        text: ("" + _final) == '' ? msgForError : ("" + _final),
                        c: b == "ar" || b == "iw" ? "rtl" : "ltr",
                        langF: fromLang,
                        langT: b
                    })
                },
                error: function (data) {
                    var items = data;
                    chrome.tabs.sendRequest(e, {
                        a: "Result",
                        text: msgForError,
                        c: b == "ar" || b == "iw" ? "rtl" : "ltr",
                        langF: fromLang,
                        langT: b
                    })
                }
            });
        }

    }
    else {
        var msgForError = "Error - you must configure the languages from <a href='" + optionsPage + "'> Options page </a>, adjust the FROM and TO languages.";
        chrome.tabs.sendRequest(e, {
            a: "Result",
            text: msgForError,
            c: b == "ar" || b == "iw" ? "rtl" : "ltr",
            langF: fromLang,
            langT: b
        })
    }
    //    google.language.detect(a,
    //    function (i) {
    //        !i.error && i.language && a != "" && google.language.translate(a, i.language, b,
    //        function (l) {
    //            if (l.translation) chrome.tabs.sendRequest(e, {
    //                a: "Result",
    //                text: "" + l.translation,
    //                c: b == "ar" || b == "iw" ? "rtl" : "ltr"
    //            })
    //        })
    //    })
}
function m(a, b) {
    if (a.length > 2075) a = a.replace(/&text=.+&hl/, "&text=Text%20too%20long&hl");
    var e = new XMLHttpRequest;
    e.onreadystatechange = function () {
        e.readyState == 4 && b(JSON.parse(e.responseText))
    };
    a = a;
    e.open("GET", a, true);
    e.send()
}
chrome.extension.onRequest.addListener(function (a, b, e) {
    if (b.tab != null) if (f[0] == true) chrome.pageAction.hide(b.tab.id);
    else {
        chrome.pageAction.show(b.tab.id);
        chrome.pageAction.setIcon({
            path: g[5],
            tabId: b.tab.id
        })
    }
    switch (a.a) {
        case "getConf":
            chrome.tabs.sendRequest(b.tab.id, {
                a: "Conf",
                d: d,
                b: g
            });
            break;
        case "Translate":
            k(a.text, a.lang, b.tab.id);
            break;
        case "Selection":
            h[0] = a.text;
            h[1] = b.tab.id;
            break;
        case "popTranslate":
            h[0] && h[0] != "" && k(h[0], c[0], h[1]);
            break;
        case "webTranslate":
            chrome.tabs.getSelected(null,
        function (i) {
            chrome.tabs.executeScript(i.id, {
                code: "var e=document.createElement('script');e.type='text/javascript';e.innerText='function googleTranslateElementInit() {new google.translate.TranslateElement({});}';document.body.appendChild(e);var a=document.createElement('script');a.type='text/javascript';a.charset='UTF-8';a.src='http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';document.body.appendChild(a);"
            })
        });
            break;
        case "Real":
            m(a.url, e);
            break;
        case "Reload":
            j();
            break
    }
});
window.onload = function () {
    j()
};


function translateit() {
    $.ajax({
        url: 'http://mymemory.translated.net/api/get?q=Hello world from Canada&langpair=en|ar',
        dataType: 'json',
        success: function (data) {
            var items = data;
            debugger;
        },
        error: function (data) {
            var items = data;
            debugger;
        }
    });


    //kigXfS4exL2Eg
}

function translateit2() {
    $.ajax({
        url: 'http://translate.google.com/translate_a/t',
        type: 'GET',
        data: 'client=x&text=' + encodeURI(msg) + '&hl=en&sl=' + (from || 'auto') + '&tl=' + to,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            var _final = '';
            pl.each(data.sentences, function (k, val) {
                _final += val.trans;
            });
            it.api.data.callback(_final, data);
        }

    });
}