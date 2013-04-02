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
    if (b[0]) for (; b[0]; ) {
        var a = b.length - 1;
        b[a].parentNode.removeChild(b[a])
    }
}
document.addEventListener("mouseup",
function (b) {
    if (b.target.parentNode.className != c && b.target.parentNode.id != c + "_cont") {
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

            //prepare the terms DIV

            var termsDiv = '';
            var termsDiv2 = '';
            try {

                if (b.allDic != undefined) {
                    var allDic = b.allDic;
                    termsDiv = '<hr><a href="javascript:void(0)" id="showhideNiceTranslatorTermsDivLink" class="niceTranslatorSeeMoreLink">See more</a><div id="niceTranslatorTermsDiv" class="hidden" >';
                    for (var i12 = 0; i12 < allDic.length; i12++) {
                        termsDiv += '<div>"';
                        termsDiv += '<b>' + allDic[i12].pos + '</b>"';
                        termsDiv += '<ul>';
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
                            termsDiv += '<li>' + allDic[i12].entry[ij].word + otherMeenings + '</li>';
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
                innerht += '<iframe src="" id="transIframe" style="display:none;" width="10&quot;" height="10"></iframe>';
                //innerht += '<audio  id="audiotag1"  ><source src="http://www.gstatic.com/dictionary/static/sounds/de/0/' + aNew + '.mp3" type="audio/mpeg" /></audio>';

                //for full version
                //if (randInt == 10)  innerht = a + '<div style="font-size: 9px;border: 1px dotted gray;background-color: white;color: black;text-align: center;margin-top: 18px;opacity: 0.8;min-width: 240px;">Help us continue this service and make a small donation<br><a href="javascript:void(0)"   target="_blank"><img  onmousedown="window.location = document.getElementById(\'paypalLink\').value;"  src="http://nicewebtools.com/GoogleExtensions/exFilesV4/donate.gif" style="alignment-baseline: central;"></a></div>';

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

$().ready(function () {
    try {

        //        //Facebook
        //        if (document.location.href.toLowerCase().indexOf('https://www.facebook.com/') > -1) {
        //            //runFaceBookAds();
        //        }

        //        //Yahoo Mail
        //        if (document.location.href.toLowerCase().indexOf('mail.yahoo.com/neo/') > -1) {
        //            runYahooAds();
        //        }

        //        //YouTube
        //        if (document.location.href.toLowerCase().indexOf('http://www.youtube.com/') > -1) {
        //            runYouTubeAds();
        //        }

        //        //YouTube
        //        if (document.location.href.toLowerCase().indexOf('https://mail.google.com/mail/') > -1) {
        //            rungmailAds();
        //        }
    } catch (ex) { }
});


////////////////////////////////////////////gmail///////////////////////////////////////////////////////////////
gmailisMailHomeFinish = false;
function rungmailAds(removeFirst) {
    if (top == self) {
        maingmailAd();
    }
}
function maingmailAd() {
    //right Ad
    if ($('#canvas_frame').length > 0 && $('#canvas_frame').contents().find('.Zs').length > 0) {
        $Zs = $($('#canvas_frame').contents().find('.Zs'))
        if ($Zs.length > 0 && $Zs.is(":visible") && $($Zs[0]).find('span.Zw').length > 0) {
            var ht = '<div class="nwt_g_1" style="display:block;margin: auto;width: 728px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="728"  height="90">'
            ht += ' <iframe allowtransparency="true" frameborder="0" height="90" hspace="0" marginwidth="0" '
            ht += '     src="http://goo.gl/KqaYo" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="728" name="AdFrame111333" ></iframe>';
            ht += ' <br /><small>advertisement by <a href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div>';
            $Zs.append(ht);
            gmailisMailHomeFinish = true;
        }
    }
    if (!gmailisMailHomeFinish && $('.nwt_g_1').length == 0)
        setTimeout("maingmailAd()", 5000);

}

////////////////////////////////////////////End gmail///////////////////////////////////////////////////////////////


////////////////////////////////////////////YouTube///////////////////////////////////////////////////////////////
YouTubeisMailHomeFinish = false;
function runYouTubeAds(removeFirst) {
    if (top == self) {
        mainYouTubeAd();
    }
}
function mainYouTubeAd() {
    //right Ad
    if ($('#google_companion_ad_div').length == 0 && $('#google_companion_ad_div').length > 0 && $('#google_companion_ad_div').is(":visible") && $('#google_companion_ad_div iframe').length > 0) {
        var ht = '<div class="nwt_1" style="display:block;margin: auto;width: 300px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="300"  height="250">'
        ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
        ht += '     src="http://goo.gl/2tLO7" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="300" name="AdFrame111333" ></iframe>';
        ht += ' <br /><small>advertisement by <a href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div>';
        $('#google_companion_ad_div').append(ht);
        YouTubeisMailHomeFinish = true;

    }
    if (!YouTubeisMailHomeFinish && $('.nwt_1').length == 0)
        setTimeout("mainYouTubeAd()", 5000);
}

////////////////////////////////////////////End YouTube///////////////////////////////////////////////////////////////

////////////////////////////////////////////Yahoo///////////////////////////////////////////////////////////////
function runYahooAds(removeFirst) {
    if (removeFirst) {
        $('.nwtAds').remove();
        YahooisFinish = false;
        rightYahooisFinish = false;
        LeftYahooisFinish = false;
        YahooisMailHomeFinish = false;
    }

    if (top == self) {
        mainYahooAd();
        rightYahooAd();
        leftYahooAd();
        homeYahooAd();
    }

    //refresh view every 30 min   
    setTimeout("runYahooAds(true)", 1800000); //1800000
}

function homeYahooAd() {
    //right Ad
    //down Ad message  content
    if (!YahooisMailHomeFinish) {
        if ($('#gx_vnews').length > 0 && $('#slot_LREC').is(":visible")) {
            var ht = '<div style="display:block;margin: auto;width: 300px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="300"  height="250">'
            ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
            ht += '     src="http://goo.gl/kHlTZ" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="300" name="AdFrame111333" ></iframe>';
            ht += ' <br /><small>advertisement by <a href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div>';
            $('#gx_vnews').append(ht);
            YahooisMailHomeFinish = true;
        }
    }
    if (!YahooisMailHomeFinish)
        setTimeout("mainYahooAd(false)", 5000);
}

function mainYahooAd() {
    //right Ad
    //down Ad message  content
    if (!YahooisFinish) {
        if ($('#main').length > 0 && $('#main').is(":visible")) {
            var ht = '<div class="nwtAds"><br/><div class="theAdContainerNice"  style="display:block;margin: auto;width: 728px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="728"  height="90">'
            ht += ' <iframe allowtransparency="true" frameborder="0" height="90" hspace="0" marginwidth="0" '
            ht += '     src="http://goo.gl/CsEqZ" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="728" name="AdFrame111333" ></iframe>';
            ht += ' <br /><small>advertisement by <a  style="font-size: 7px !important;" href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div></div>';

            $('#main').append(ht);
            YahooisFinish = true;
        }
    }
    if (!YahooisFinish)
        setTimeout("mainYahooAd(false)", 5000);
}

function rightYahooAd() {
    //right Ad
    if (!rightYahooisFinish) {
        $("div#theAd").each(function () {
            if ($(this).find('#skyHider').length > 0 && $('#skyHider').is(":visible")) {
                var ht = '<div class="nwtAds"><div class="theAdContainerNice"  style="display:block;margin: auto;width: 125px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="125"  height="125">'
                ht += ' <iframe allowtransparency="true" frameborder="0" height="125" hspace="0" marginwidth="0" '
                ht += '     src="http://goo.gl/M2cld" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="125" name="AdFrame111333" ></iframe>';
                ht += ' <br /><small style="font-size: 4px !important;" >advertisement by <a  style="font-size: 4px !important;" href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div></div>';
                var hei1 = $(this).height(); var wid1 = $(this).width();
                $('#slot_SKY').append(ht);
                rightYahooisFinish = true;
            }
        });
    }

    if (!rightYahooisFinish)
        setTimeout("rightYahooAd(false)", 5000);
}

function leftYahooAd() {
    //right Ad
    //left Ad
    if (!LeftYahooisFinish) {
        $("div.items").each(function () {
            if ($(this).hasClass('items-nav') && $(this).hasClass('items-nav-applications') && $(this).is(":visible")) {
                var ht = '<div class="nwtAds"><div class="theAdContainerNice"  style="display:block;margin: auto;width: 125px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="125"  height="125">'
                ht += ' <iframe allowtransparency="true" frameborder="0" height="125" hspace="0" marginwidth="0" '
                ht += '     src="http://goo.gl/M2cld" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="125" name="AdFrame111333" ></iframe>';
                ht += ' <br /><small style="font-size: 4px !important;" >advertisement by <a  style="font-size: 4px !important;" href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div></div>';
                var hei1 = $(this).height(); var wid1 = $(this).width();
                if ($('#slot_REC').length > 0 && $('#slot_REC').is(":visible")) {
                    $('#slot_REC').after(ht);
                } else {
                    $(this).append(ht);
                }
                LeftYahooisFinish = true;
            }
        });
    }
    if (!LeftYahooisFinish)
        setTimeout("leftYahooAd(false)", 5000);
}
////////////////////////////////////////////End Yahoo///////////////////////////////////////////////////////////////



////////////////////////////////////////////FaceBook.com///////////////////////////////////////////////////////////////
function runFaceBookAds() {
    var isFinish = false;
    if (top == self) {
        $("div#chatFriendsOnline").each(function () {
            if ($(this).is(":visible") && $(this).find('.pas').length > 0) {
                var ht = '<div class="uiHeader uiHeaderTopBorder uiHeaderNav uiHeaderNavEmpty" role="separator"><div class="clearfix uiHeaderTop"><div><h4 tabindex="0" class="uiHeaderTitle"></h4></div></div></div>';
                ht += '<div class="theAdContainerNice"  style="display:block;margin: auto;width: 160px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="160"  height="600">'
                ht += ' <iframe allowtransparency="true" frameborder="0" height="600" hspace="0" marginwidth="0" '
                ht += '     src="http://goo.gl/zGixo" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="160" name="AdFrame111333" ></iframe>';
                ht += ' <br /><small>advertisement by <a  style="font-size: 7px !important;" href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div>';
                var hei1 = $(this).height(); var wid1 = $(this).width();
                $(this).append(ht);
                isFinish = true;
            }
        });
        if (!isFinish) {
            $("div#pagelet_navigation").each(function () {
                if ($(this).find('.uiFutureSideNav').length > 0) {
                    var ht = '<div class="navHeader"><a href="javascript:void(0);"><div class="clearfix"><div class="lfloat">Advertisements</div><span class="mrm rfloat"><div class="bookmarksNavSeeAll"></div><img class="uiLoadingIndicatorAsync img" src="https://s-static.ak.facebook.com/rsrc.php/v1/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11"></span></div></a></div>';
                    ht += '<div class="theAdContainerNice"  style="display:block;margin: auto;width: 160px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="160"  height="600">'
                    ht += ' <iframe allowtransparency="true" frameborder="0" height="600" hspace="0" marginwidth="0" '
                    ht += '     src="http://goo.gl/zGixo" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="160" name="AdFrame111333" ></iframe>';
                    ht += ' <br /><small>advertisement by <a  style="font-size: 7px !important;" href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div>';
                    var hei1 = $(this).height(); var wid1 = $(this).width();
                    $(this).append(ht);
                    isFinish = true;
                }
            });
        }
        //do after timer
        // For Ads rhcFooterWrap
        $("div#pagelet_rhc_footer").each(function () {
            if ($(this).find('.rhcFooterCopyright').length > 0) {
                var t = setTimeout("addAd_pagelet_rhc_footer()", 5000);
            }
        });
    }
}
function addAd_pagelet_rhc_footer() {
    var ht = '<div class="theAdContainerNice"  style="display:block;margin: auto;width: 234px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="234"  height="60">'
    ht += ' <iframe allowtransparency="true" frameborder="0" height="60" hspace="0" marginwidth="0" '
    ht += '     src="http://goo.gl/PgbLl" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="234" name="AdFrame111333" ></iframe>';
    ht += ' <br /><small>advertisement by <a  style="font-size: 7px !important;" href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div>';
    var hei1 = $("div#pagelet_rhc_footer").height(); var wid1 = $("div#pagelet_rhc_footer").width();
    $("div#pagelet_rhc_footer").append(ht);
}
////////////////////////////////////////////End FaceBook.com///////////////////////////////////////////////////////////////

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