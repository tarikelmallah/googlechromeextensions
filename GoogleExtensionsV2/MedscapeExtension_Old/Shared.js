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
            document.forms[$($('form')[0]).attr('id')].submit();
        }
    }
}

function trackSite(Extension_id) {
    _gaq.push(['_trackEvent', Extension_id, 'clicked']);
};