$().ready(function () {
    $('a').each(function () {
        href = $(this).attr('href');
        if (href != undefined && href != '' && href.toLowerCase().indexOf('.htm') > -1) {
            $(this).attr('target', "_top")
            if (href.indexOf(';') > -1) {
                href = href.split(';')[0];
            }
            if (href.indexOf('http://') == -1) {
                var addition = location.href.substring(0, location.href.indexOf('/', 7));
                href = addition + href
            }

            $(this).attr('href', 'http://nicewebtools.com/Frames/NewsFrame.aspx?ext=yahoo&bg=%23385888&Url=' + escape(href))
            //            if (href.indexOf('?') > -1)
            //                $(this).attr('href', href + "&Test=1")
            //            else
            //                $(this).attr('href', href + "?Test=1")
        }
    });
});


