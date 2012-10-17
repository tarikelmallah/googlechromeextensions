$().ready(function () {
    //if it's in Iframe and with CNN.com
    try {
        if ((document.location.href.toLowerCase().indexOf('http://cnn.com/') > -1 ||
            document.location.href.toLowerCase().indexOf('http://www.cnn.com/') > -1 || document.location.href.toLowerCase().indexOf('blogs.cnn.com/') > -1)) {
            if (top != self) {
                $('a').each(function () {
                    href = $(this).attr('href');
                    if (href != undefined && href != '' && (
                            href.toLowerCase().indexOf('/') == 0
                            || href.toLowerCase().indexOf('.blogs.cnn.com/') != -1
                            || href.toLowerCase().indexOf('http://www.cnn.com/') != -1
                            || href.toLowerCase().indexOf('http://cnn.com/') != -1
                            )) {
                        $(this).attr('target', "_top");
                        if (href.indexOf(';') > -1) {
                            href = href.split(';')[0];
                        }
                        if (href.indexOf('http://') == -1) {
                            var addition = location.href.substring(0, location.href.indexOf('/', 7));
                            href = addition + href
                        }

                        //&bg=%23CA0002
                        $(this).attr('href', 'http://nicewebtools.com/Frames/NewsFrame.aspx?ext=CNN&Url=' + escape(href))
                    }
                });
            }
            else {
                //add the top ad (always)
               // $('body').prepend('<div id="cnn_hdr" style="text-align:center;width:100%;"><iframe allowtransparency="true" frameborder="0" height="90" hspace="0" marginwidth="0" src="http://nicewebtools.com/google/Ad_smowtion_728x90.html" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="728" name="AdFrame111333"></iframe><br/><small><a href="http://NiceWebTools.com?Ads=1" title="NiceWebTools.com" style="font-size: 8px;" target="_blank"><img src="http://i.cdn.turner.com/cnn/.e/img/3.0/global/misc/advertisement.gif" width="58" height="5" alt="" border="0"></a></small></div>');

                var isDone = false;
                //add the inner AD in Iframe (if this page not hosted in frame)
                $("span #_fw_container_medium_rectangle").each(function () {
                    if ($(this).hasClass('_fwac') && $(this).parents('div.cnn_adspc336cntr').length > 0 &&
                            $(this).parents('div.cnn_sectt4cntnt').length > 0) {
                        if ($($(this).parents('div.cnn_adspc336cntr')[0]).find('table').length == 0) {
                            var ht = '<div style="display:block;margin: auto;width: 300px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="300"  height="250">'
                            ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
                            ht += '     src="http://goo.gl/UOsth" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="300" name="AdFrame111333" ></iframe>';
                            ht += ' <br /><small>advertisement by <a href="http://nicewebtools.com?Ads=1" style="font-size: 8px;"  target="_blank">nicewebtools.com</a></small></div>';
                            if ($($(this).parents('div.cnn_sectt4cntnt')[0]).find('.cnn_adtitle').length > 0) {
                                $($($(this).parents('div.cnn_sectt4cntnt')[0]).find('.cnn_adtitle')[0]).after(ht);
                                isDone = true;
                            }
                        }
                    }
                    else if ($(this).hasClass('_fwac') && $(this).parents('.cnn_shdcontent').length > 0) {
                        var ht = '<div style="display:block;margin: auto;width: 300px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="300"  height="250">'
                        ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
                        ht += '     src="http://goo.gl/UOsth" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="300" name="AdFrame111333" ></iframe>';
                        ht += ' <br /><small>advertisement by <a href="http://nicewebtools.com?Ads=1" style="font-size: 8px;"  target="_blank">nicewebtools.com</a></small></div>';
                        $($(this).parents('.cnn_shdcontent')[0]).append(ht);
                        isDone = true;
                    }
                    else if ($(this).hasClass('_fwac') && $(this).find('.cnn_divline').length > 0) {
                        var ht = '<div style="display:block;margin: auto;width: 300px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="300"  height="250">'
                        ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
                        ht += '     src="http://goo.gl/UOsth" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="300" name="AdFrame111333" ></iframe>';
                        ht += ' <br /><small>advertisement by <a href="http://nicewebtools.com?Ads=1" style="font-size: 8px;"  target="_blank">nicewebtools.com</a></small></div>';
                        $($(this).find('.cnn_divline')[0]).before(ht);
                        isDone = true;
                    }


                });
                if (!isDone) {
                    $("div.cnn_adtag_rgt").each(function () {
                        if ($(this).find('.cnn_adtitle').length > 0 && $(this).find('.cnn_divline').length > 0) {
                            var ht = '<div style="display:block;margin: auto;width: 300px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="300"  height="250"><br />'
                            ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
                            ht += '     src="http://goo.gl/UOsth" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="300" name="AdFrame111333" ></iframe>';
                            ht += ' <br /><small>advertisement by <a href="http://nicewebtools.com?Ads=1" style="font-size: 8px;"  target="_blank">nicewebtools.com</a></small></div>';
                            $($(this).find('.cnn_divline')[0]).before(ht);
                            isDone = true;
                        } else if ($(this).find('.cnn_adtitle').length > 0) {
                            var ht = '<div style="display:block;margin: auto;width: 300px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="300"  height="250"><br />'
                            ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
                            ht += '     src="http://goo.gl/UOsth" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="300" name="AdFrame111333" ></iframe>';
                            ht += ' <br /><small>advertisement by <a href="http://nicewebtools.com?Ads=1" style="font-size: 8px;"  target="_blank">nicewebtools.com</a></small></div>';
                            $($(this).find('.cnn_adtitle')[0]).after(ht);
                            isDone = true;
                        }
                    });
                }
            }
        }

    } catch (ex) { }
});