$().ready(function () {
    //if it's in Iframe
    try {
        if (top == self) {
            $("div.advertisement").each(function () {
                if ($(this).hasClass('adSummary')) {
                    var ht = '<div style="display:block;" width="300"  height="250"><br />'
                    ht += ' <iframe allowtransparency="true" frameborder="0" height="250" hspace="0" marginwidth="0" '
                    ht += '     src="http://goo.gl/UOsth" marginheight="0" scrolling="no" vspace="0" id="AdFrame111333"  width="300" name="AdFrame111333" ></iframe>';
                    ht += ' <br /><small>advertisement by <a href="http://NiceWebTools.com?Ads=1" target="_blank">NiceWebTools.com</a></small></div>';
                    $(this).append(ht);
                }
            });
        }
    } catch (ex) { }
});