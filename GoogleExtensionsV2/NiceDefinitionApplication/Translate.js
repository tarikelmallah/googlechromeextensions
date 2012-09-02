var scr = "Translate this";
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
