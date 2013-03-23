function adjustBodyStyle() {
    //get current node
    $("body").css({ overflow: 'inherit' });
    $("body").css({ overflow: 'hidden' });
    $("body").css({ overflow: 'inherit' });
    timerRotation = window.setTimeout(function () { $("body").css({ overflow: 'hidden' }); }, 1000);
}
adjustBodyStyle();
$('body').load(function () { adjustBodyStyle(); });