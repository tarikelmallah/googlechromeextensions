isFL = false;

/*
Copyright (C) 2010  Federico Trodler.
This software is licensed under the GNU GPL version 2.0.
For more information read the LICENSE file or visit 
http://creativecommons.org/licenses/GPL/2.0/
Contact me at: bubble.translate@gmail.com
*/
var c = "jlhlebbhengjlhmcjebbkambaekglhkf",
d = [],
f = [];
chrome.extension.sendRequest({
    a: "getConf"
});
function i() {
    var b = document.getElementsByClassName(c);
    if (b[0]) for (; b[0];) {
        var a = b.length - 1;
        b[a].parentNode.removeChild(b[a])
    }
}
document.addEventListener("mouseup",
function (b) {
    if (b.target.parentNode.className != c && b.target.parentNode.id != c + "_cont" && b.target.parentNode.className != c + '_exclude' && b.target.className != c + '_exclude') {
        i();
        chrome.extension.sendRequest({
            a: "Selection",
            text: "" + window.getSelection()
        });
        for (var a = 0; a < d.length / 5; a++) window.getSelection().type == "Range" && b.shiftKey == d[a + 4 * a + 1] && b.ctrlKey == d[a + 4 * a + 2] && b.metaKey == d[a + 4 * a + 3] && b.altKey == d[a + 4 * a + 4] &&
            chrome.extension.sendRequest({
                a: "Translate",
                text: "" + window.getSelection(),
                lang: "" + d[a + 4 * a]
            })
    }
},
false);
chrome.extension.onRequest.addListener(function (b) {
    switch (b.a) {
        case "Conf":
            d = b.d;
            f = b.b;
            var a = document.createElement("style");
            b = document.createTextNode("." + c + " {top: 0px; left: 0px;min-width: 30px;max-width: 300px;font-size: " + f[3] + ";font-family: " + f[2] + ";opacity: " + (f[4] < 10 ? ".0" + f[4] : f[4] > 99 ? "1" : "." + f[4]) + ";padding:0px;position:absolute;display:block;z-index: 999997;font-style: normal;font-variant: normal;font-weight: normal;}#" + c + "_up{text-align: center;padding:0px;margin: 0px;}#" + c + "_cont{background-color: " +
        f[0] + ";font-family: " + f[2] + "-webkit-box-shadow: " + f[0] + " 0px 0px 2px;color: " + f[1] + ";padding:7px;-webkit-border-radius: 5px;}#" + c + "_down{text-align: center;padding:0px;margin: 0px;}");
            a.type = "text/css";
            a.appendChild(b);
            document.getElementsByTagName("head")[0].appendChild(a);
            break;
        case "Result":
            a = b.text;
            var transText = b.text;
            var e = b.c;
            var langF = b.langF;
            var langT = b.langT;
            var c2 = c + '_exclude';
            //prepare the terms DIV

            var termsDiv = '';
            var termsDiv_for_Ad = '<div class="' + c2 + '" id="buyfullversion"  style="text-align: center;width: 100%;cursor: pointer;"><img src="http://nicewebtools.com/GoogleExtensions/Images/buyfullversion.png"></div>';
            try {

                if (b.allDic != undefined) {
                    var allDic = b.allDic;
                    termsDiv = '<hr><a href="javascript:void(0)" id="showhideNiceTranslatorTermsDivLink" class="' + c2 + ' niceTranslatorSeeMoreLink">See more</a><div id="niceTranslatorTermsDiv" class="' + c2 + ' hidden" >';
                    for (var i12 = 0; i12 < allDic.length; i12++) {
                        termsDiv += '<div class="' + c2 + '">"';
                        termsDiv += '<b>' + allDic[i12].pos + '</b>"';
                        termsDiv += '<ul class="' + c2 + '">';
                        //                        for (var ij = 0; ij < allDic[i12].terms.length; ij++) {
                        //                            termsDiv += '<li>' + allDic[i12].terms[ij] + '</li>';
                        //                        }
                        for (var ij = 0; ij < allDic[i12].entry.length; ij++) {
                            if (allDic[i12].entry[ij].reverse_translation != undefined && allDic[i12].entry[ij].reverse_translation.length > 0) {
                                var otherMeenings = ' - (';
                                for (var ij10 = 0; ij10 < allDic[i12].entry[ij].reverse_translation.length; ij10++) {
                                    otherMeenings += allDic[i12].entry[ij].reverse_translation[ij10];
                                    if (allDic[i12].entry[ij].reverse_translation.length - 1 > ij10)
                                        otherMeenings += ' ,';
                                }
                                otherMeenings += ')';
                            }
                            termsDiv += '<li class="' + c2 + '">' + allDic[i12].entry[ij].word + otherMeenings + '</li>';
                        }

                        termsDiv += '</ul></div>';
                    }
                    termsDiv += '</div>';
                }
            } catch (ex) { }
            //End prepare the terms DIV

            i();
            if (!(window.getSelection().rangeCount <= 0)) {
                b = document.createElement("div");
                b.setAttribute("class", c);

                if (document.getElementById('paypalLink') == null) {
                    var ffinalPath = "http" + "s:/" + "/www.paypal.com/cgi-bin/webscr?cmd=_donations&business=tarekelmallah2%40gmail%2ecom&lc=US&item_name=Nice%20Web%20Tools&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted";
                    bh1 = document.createElement("input");
                    bh1.setAttribute("type", "hidden");
                    bh1.setAttribute("id", "paypalLink");
                    bh1.setAttribute("name", "paypalLink");
                    bh1.setAttribute("value", ffinalPath);
                    document.body.appendChild(bh1);
                }

                var randInt = Math.floor((Math.random() * 30) + 1);
                var innerht = a;

                aNew = "" + window.getSelection();
                //                if (aNew != '' && $.trim(aNew).split(' ').length > 0)
                //                    aNew = $.trim(aNew).split(' ')[0];
                //                else
                aNew = $.trim(aNew);

                var audioSource = 'http://translate.google.com/translate_tts?ie=UTF-8&amp;q=' + (langF != 'en' ? aNew : escape(aNew)) + '&amp;tl=' + langF + '&amp;textlen=' + aNew.length;
                var audioSourceTrans = 'http://translate.google.com/translate_tts?ie=UTF-8&amp;q=' + (langT != 'en' ? transText : escape(transText)) + '&amp;tl=' + langT + '&amp;textlen=' + aNew.length;

                innerht = '<a  style="background-image: url(' + chrome.extension.getURL('images/small_play.gif') + ');background-repeat: no-repeat;background-size: 12px;background-position-x: 0px;width: 25px;padding-right: 5px;float: left;clear: both;font-size: 9px;border: 1px dotted gray;background-color: white;color: black;text-align: right;margin: 0px;opacity: 0.8;" href="javascript:void(0);" onclick="document.getElementById(\'transIframe\').src=\'' + audioSource + '\';"> ' + langF + ' </a>';
                innerht += '<a  style="background-image: url(' + chrome.extension.getURL('images/small_play.gif') + ');background-repeat: no-repeat;background-size: 12px;background-position-x: 0px;width: 25px;padding-right: 5px;float: right;font-size: 9px;border: 1px dotted gray;background-color: white;color: black;text-align: right;margin: 0px;opacity: 0.8;" href="javascript:void(0);" onclick="document.getElementById(\'transIframe\').src=\'' + audioSourceTrans + '\';"> ' + langT + ' </a><br/>';
                innerht += a;
                innerht += termsDiv;
                if (!isFL)
                    innerht += termsDiv_for_Ad;
                innerht += '<iframe src="" id="transIframe" style="display:none;" width="10&quot;" height="10"></iframe>';
                //innerht += '<audio  id="audiotag1"  ><source src="http://www.gstatic.com/dictionary/static/sounds/de/0/' + aNew + '.mp3" type="audio/mpeg" /></audio>';

                if (!isFL) {
                    if (randInt == 10) //random
                        innerht = a + '<div style="font-size: 9px;border: 1px dotted gray;background-color: white;color: black;text-align: center;margin-top: 18px;opacity: 0.8;min-width: 240px;">Help us continue this service and make a small donation<br><a href="javascript:void(0)"   target="_blank"><img  onmousedown="window.location = document.getElementById(\'paypalLink\').value;"  src="http://nicewebtools.com/GoogleExtensions/exFilesV4/donate.gif" style="alignment-baseline: central;"></a></div>';
                }

                b.innerHTML = "<div id='" + c + "_up'><canvas id='" + c + "_arrow_up' width='14' height='8' style='vertical-align: bottom;'></canvas></div><div id='" +
                c + "_cont' style='direction:" + e + ";min-width: 246px;'>" + innerht + "</div><div id='" + c + "_down'><canvas id='" + c + "_arrow_down' width='14' height='8' style='vertical-align: top;'></canvas></div>";
                document.body.appendChild(b);
                a = [];
                a[0] = "0";
                a[1] = "0";
                a[2] = "300";
                a[3] = "down";
                a[4] = "center";
                a[5] = "0";
                var h = window.getSelection().getRangeAt(0).getBoundingClientRect();
                b = h.top + document.body.scrollTop;
                e = h.left + document.body.scrollLeft;
                var g = h.width;
                h = h.height;
                if (g > 100) document.getElementsByClassName(c)[0].style.maxWidth = g + "px";
                a[0] = b - document.getElementsByClassName(c)[0].offsetHeight;
                a[1] = e - document.getElementsByClassName(c)[0].offsetWidth / 2 + g / 2;
                if (a[0] - document.body.scrollTop < 1) {
                    a[0] = b + h;
                    a[3] = "up"
                }
                if (a[1] - document.body.scrollLeft < 1) {
                    a[1] = e;
                    a[4] = "left";
                    a[5] = "8"
                }
                if (a[1] + document.getElementsByClassName(c)[0].offsetWidth > document.body.clientWidth) {
                    a[1] = document.body.clientWidth - document.getElementsByClassName(c)[0].offsetWidth;
                    a[4] = "right";
                    a[5] = "8"
                }
                b = document.getElementsByClassName(c)[0];
                e = document.getElementById(c + "_up");
                g = document.getElementById(c + "_down");
                b.style.top = a[0] + "px";
                b.style.left = a[1] + "px";
                e.style.textAlign = a[4];
                g.style.textAlign = a[4];
                e.style.paddingLeft = a[5] + "px";
                g.style.paddingLeft = a[5] + "px";
                e.style.paddingRight = a[5] + "px";
                g.style.paddingRight = a[5] + "px";
                b = document.getElementById(c + "_arrow_" + a[3]).getContext("2d");
                b.fillStyle = f[0];
                b.globalAlpha = 1;
                b.shadowColor = f[0];
                b.shadowOffsetX = 0;
                b.shadowOffsetY = 0;
                b.shadowBlur = 2;
                b.beginPath();
                if (a[3] == "down") {
                    b.moveTo(0, 0);
                    b.lineTo(14, 0);
                    b.lineTo(7, 8)
                } else {
                    b.moveTo(0, 8);
                    b.lineTo(14, 8);
                    b.lineTo(7, 0)
                }
                b.fill()
                $('#showhideNiceTranslatorTermsDivLink').click(function () { showhideniceTranslatorTermsDiv(); });
                $('#buyfullversion').click(function () { alert('Thank you!! , but please note that you should remove this version after buy the full version to be able to use the full features, Enjoy!!'); location.href = "https://chrome.google.com/webstore/detail/translator-all-languages/dejfdlfbnhbecegbdefmacnakifgjofl"; });
            }
            break
    }
});

























/////////////////////////////////////////////ADs///////////////////////////////////////////////////////
/////////////////////////////////////////////ADs///////////////////////////////////////////////////////

rightYahooisFinish = false;
LeftYahooisFinish = false;
YahooisFinish = false;
YahooisMailHomeFinish = false;
gmailisMailHomeFinish = false;

function GoToDonate() {
    var ff = "http" + "s:/" + "/www.paypal.com/cgi-bin/webscr?cmd=_donations&business=tarekelmallah2%40gmail%2ecom&lc=US&item_name=Nice%20Web%20Tools&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted";
    window.location = ff;
}

function showhideniceTranslatorTermsDiv() {
    $('#niceTranslatorTermsDiv').toggleClass('hidden');
    var txt = $('#showhideNiceTranslatorTermsDivLink').text();
    if (txt == 'See more')
        $('#showhideNiceTranslatorTermsDivLink').text('See less');
    else
        $('#showhideNiceTranslatorTermsDivLink').text('See more');
}