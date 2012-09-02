function goOpenUrl(theLink) {
    var bk = chrome.extension.getBackgroundPage();
    try { trackSite(bk.ModuleName); } catch (ex) { }
    for (i = 0; i < bk.fruitvegbasket.length; i++) {
        var varItem = bk.fruitvegbasket[i];
        if ($(theLink).attr('theHref') == varItem.itemlink) {
            var img = $($($(theLink).parent()).find('img')[0]).attr('src');
            $('#pUrl').val(varItem.itemlink);
            $('#pPageTitle').val(varItem.itemTitle);
            $('#pDescription').val($('<div>' + varItem.itemdescription + '</div>').text().replace(/""/gi, ""))
            $('#pLagreImageUrl').val(img);
            $('#pSmallImageUrl').val(img);
            var theLink2 = varItem.itemlink;
            if (bk.UseGuidInLink)
                theLink2 = varItem.itemguid;
            $($('form')[0]).attr('action', bk.FormActionUrl + escape(theLink2));
            document.forms[$($('form')[0]).attr('id')].submit();

            window.setTimeout(function () { bk.closeThenotification(); }, 100);
        }
    }
}

function trackSite(Extension_id) {
    _gaq.push(['_trackEvent', Extension_id, 'clicked']);
};


function goOpenUrlDirect(theLink) {
    $($('form')[0]).attr('action', theLink);
    $($('form')[0]).attr('method', 'get');


    $('#u').val($(this).attr('linkToArticle'));
    //$(this).attr('linkToFace')    
    document.forms[$($('form')[0]).attr('id')].submit();
}
function goOpenUrlDirectFaceBook(theLink) {
    $($('form')[0]).attr('action', $(theLink).attr('linkToFace'));
    $($('form')[0]).attr('method', 'get');
    $('#u').val($(theLink).attr('linkToArticle'));
    document.forms[$($('form')[0]).attr('id')].submit();
}