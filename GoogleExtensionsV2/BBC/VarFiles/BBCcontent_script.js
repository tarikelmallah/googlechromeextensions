$().ready(function () {
    //if it's in Iframe
    try {
        isFinish = false;

        if (top == self) {
            $("div.bbccom-advert").each(function () {
                if (isFinish)
                    return; //do nothing if alredy one AD added
                if ($(this).hasClass('mpu_v3_5')) {
                    var ht = '<div class="theAdContainerNice"  style="display:block;margin: auto;width: 300px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="300"  height="250">'
                    ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
                    ht += '     src="http://goo.gl/GSSpN" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="300" name="AdFrame111333" ></iframe>';
                    ht += ' <br /><small>advertisement by <a  style="font-size: 7px !important;" href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div>';
                    var hei1 = $(this).height(); var wid1 = $(this).width();
                    $(this).append(ht);
                    finishIt(this, hei1, wid1);
                }
            });


            //for home page (right Ad 300px)
            if (!isFinish) {//do nothing if alredy one AD added
                $("div.advert").each(function () {
                    if ($(this).find('#bbccom_mpu').length > 0 && $(this).find('div.mpu_v3').length > 0 && $(this).find('div.bbccom_text').length > 0) {
                        var ht = '<div class="theAdContainerNice"  style="display:block;margin: auto;width: 300px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="300"  height="250">'
                        ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
                        ht += '     src="http://goo.gl/GSSpN" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="300" name="AdFrame111333" ></iframe>';
                        ht += ' <br /><small>advertisement by <a  style="font-size: 7px !important;" href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div>';
                        $(this).append(ht);
                    }
                });
            }


            //for (http://news.bbc.co.uk/2/hi/south_asia/8072291.stm)
            if (!isFinish) {//do nothing if alredy one AD added
                $("td.storyextra").each(function () {
                    if ($(this).find('#bbccom_mpu').length > 0 && $(this).find('div.mpu_v4').length > 0 && $(this).find('div.bbccom_text').length > 0) {
                        var ht = '<div class="theAdContainerNice"  style="display:block;margin: auto;width: 300px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="300"  height="250">'
                        ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
                        ht += '     src="http://goo.gl/GSSpN" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="300" name="AdFrame111333" ></iframe>';
                        ht += ' <br /><small>advertisement by <a  style="font-size: 7px !important;" href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div>';
                        $($(this).find('#bbccom_mpu')[0]).after(ht);
                    }
                });
            }

            //for inner page (top horizontal Ad)
            if (!isFinish) {//do nothing if alredy one AD added
                $("div.bbccom-advert").each(function () {
                    if ($(this).hasClass('leaderboard_v3_5')) {
                        var ht = '<div class="theAdContainerNice" style="display:block;text-align: right;font-size: 8px;" width="728"  height="90"><br />'
                        ht += ' <iframe allowtransparency="true" frameborder="0" height="90" hspace="0" marginwidth="0" '
                        ht += '     src="http://goo.gl/AB95F" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333"  width="728" name="AdFrame111333" ></iframe>';
                        ht += ' <br /><small>advertisement by <ahref="http://NiceWebTools.com?Ads=BBC" target="_blank">NiceWebTools.com</a></small></div>';
                        var hei1 = $(this).height(); var wid1 = $(this).width();
                        $(this).append(ht);
                        finishIt(this, hei1, wid1); //adjust height if neccessary
                    }
                });
            }



            //second part (Run it even finifshed or not)
            $("div.bbccom_adsense").each(function () {
                if ($(this).hasClass('bbccom-advert') && $(this).hasClass('adsense_mpu_v3_5')) {
                    var hei1 = $(this).height(); var wid1 = $(this).width();
                    var ht = '';
                    if (wid1 >= 336) {
                        ht = '<div class="theAdContainerNice"  style="display:block;margin: auto;width: 336px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="336"  height="280">'
                        ht += ' <iframe allowtransparency="true" frameborder="0" height="280" hspace="0" marginwidth="0" '
                        ht += '     src="http://goo.gl/b1BAP" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="336" name="AdFrame111333" ></iframe>';
                        ht += ' <br /><small>advertisement by <a  style="font-size: 7px !important;" href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div>';
                    } else {
                        ht = '<div class="theAdContainerNice"  style="display:block;margin: auto;width: 300px;font-size: 8px;border: 0px;color: gray;text-align: right;" width="300"  height="250">'
                        ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
                        ht += '     src="http://goo.gl/GSSpN" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333" width="300" name="AdFrame111333" ></iframe>';
                        ht += ' <br /><small>advertisement by <a  style="font-size: 7px !important;" href="http://NiceWebTools.com?Ads=1" style="font-size: 8px;"  target="_blank">NiceWebTools.com</a></small></div>';
                    }
                    $(this).append(ht);
                    //finishIt(this, hei1, wid1); //adjust height if neccessary
                }
            });



        }
    } catch (ex) { }
});
function finishIt(obj, height, width) {
    isFinish = true;
    if (height > 600) {
        if (width <= 300) {
            $(obj).height(height + 278)
            $($(obj).find('.theAdContainerNice')[0]).addClass('relPosLeft_67');
        } else {
            //$(obj).height($(obj).height() + 278)
            //$($(obj).find('.theAdContainerNice')[0]).addClass('relPosLeft_67');
        }
    }
}
