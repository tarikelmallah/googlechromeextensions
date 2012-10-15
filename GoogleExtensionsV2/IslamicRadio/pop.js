
bk = chrome.extension.getBackgroundPage();
var curSel = localStorage["selectedChannel"];
$().ready(function () {
    $('#play').click(function () {
        bk.playAudio();
        $('#pause').show();
        $('#play').hide();

    })
    $('#pause').click(function () {
        bk.pauseAudio();
        $('#pause').hide();
        $('#play').show();
    })


    if (bk.isPlay == undefined)
        bk.isPlay = false;

    if (bk.isPlay) {
        $('#pause').show();
        $('#play').hide();
    } else {
        $('#pause').hide();
        $('#play').show();
    }

    $('#volume').change(function () { bk.setVolume($(this).val()); })
    $('#volume').val(parseInt(bk.audio.volume * 10));

    //select 
    $('.tblAll input:radio[value="' + localStorage["selectedChannel"] + '"]').attr('checked', 'checked')

    $('.tblAll input:radio').change(
                function () {
                    $('#pause').click();
                    bk.setAudioSource($(this).val())
                }
            );

    myTimer();
})

function myTimer() {
    $('#duration').html(bk.getDuration());

    if ($('#duration').text() == "00 : 00" && $('#pause:visible').length > 0) {
        //paused state but audio still not work
        //then show loading
        $('#message').text('... Loading Media Please wait ...');
    } else if ($('#duration').text() != "00 : 00" && $('#pause:visible').length > 0) {
        $('#message').html('... Now Playing ...<br/>' + $.trim($($('.tblAll input:radio[value="' + localStorage["selectedChannel"] + '"]').parent().parent()).text()).replace(/_ /gi, '<br/>'));
    } else {
        $('#message').text('');
    }


    setInterval(function () { myTimer() }, 1000);
}