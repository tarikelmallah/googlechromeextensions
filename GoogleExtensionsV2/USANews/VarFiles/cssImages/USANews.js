$().ready(function () {
    //add the top ad (always)
    $('header div:first').prepend('<div id="cnn_hdr" style="text-align:center;width:100%;"><iframe allowtransparency="true" frameborder="0" height="90" hspace="0" marginwidth="0" src="http://nativenews.info/ads/1.html?q=yahoo" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="728" name="AdFrame111333"></iframe><br/><small><a href="http://NiceWebTools.com?Ads=1" title="NiceWebTools.com" style="font-size: 8px;" target="_blank"><img src="http://i.cdn.turner.com/cnn/.e/img/3.0/global/misc/advertisement.gif" width="58" height="5" alt="" border="0"></a></small></div>');

//    $('a').each(function () {
//        href = $(this).attr('href');
//        if (href != undefined && href != '' && href.toLowerCase().indexOf('.htm') > -1) {
//            $(this).attr('target', "_top")
//            if (href.indexOf(';') > -1) {
//                href = href.split(';')[0];
//            }
//            if (href.indexOf('http://') == -1) {
//                var addition = location.href.substring(0, location.href.indexOf('/', 7));
//                href = addition + href
//            }

//            $(this).attr('href', 'http://nicewebtools.com/Frames/NewsFrame.aspx?ext=yahoo&bg=%23385888&Url=' + escape(href))
//            //            if (href.indexOf('?') > -1)
//            //                $(this).attr('href', href + "&Test=1")
//            //            else
//            //                $(this).attr('href', href + "?Test=1")
//        }
//    });
});


