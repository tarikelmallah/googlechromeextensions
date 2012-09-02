$().ready(function () {
    //if it's in Iframe and with yallakora.com
    try {
        if (top != self && (document.location.href.toLowerCase().indexOf('http://yallakora.com/') > -1 || document.location.href.toLowerCase().indexOf('http://www.yallakora.com/') > -1 || document.location.href.toLowerCase().indexOf('usercorner.yallakora.com/') > -1)) {
            $('a').each(function () {
                href = $(this).attr('href');
                if (href != undefined && href != '' && (
                            href.toLowerCase().indexOf('/') == 0
                            || href.toLowerCase().indexOf('../') == 0
                            || href.toLowerCase().indexOf('.usercorner.yallakora.com/') != -1
                            || href.toLowerCase().indexOf('http://www.yallakora.com/') != -1
                            || href.toLowerCase().indexOf('http://yallakora.com/') != -1
                            )) {
                    $(this).attr('target', "_top");
                    if (href.indexOf(';') > -1) {
                        href = href.split(';')[0];
                    }
                    if (href.indexOf('http://') == -1) {
                        var addition = location.href.substring(0, location.href.indexOf('/', 7));
                        if (href.indexOf('../') == 0)
                            href = href.substring(2);
                        if (href.indexOf('/../') == 0) href = href.substring(3);
                        if (href.indexOf('/../') == 0) href = href.substring(3);
                        if (href.indexOf('/../') == 0) href = href.substring(3);
                        href = addition + href
                    }

                    //&bg=%23CA0002
                    $(this).attr('href', 'http://nicewebtools.com/Frames/NewsFrame.aspx?ext=yallakora&s=t&bg=%23000&Url=' + escape(href))
                }
            });

        }

    } catch (ex) { }
});