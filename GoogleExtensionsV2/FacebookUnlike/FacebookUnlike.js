/// <reference path="jquery-1.6.2.min.js" />

/*
Copyright (C) 2013 NiceWebTools.
This software is licensed under the GNU GPL version 2.0.
For more information read the LICENSE file or visit 
http://creativecommons.org/licenses/GPL/2.0/
Contact me at: nicewebtools@gmail.com
*/
function timerFaceUnlike() {
    refreshAllViews();
    setInterval(function () { timerFaceUnlike() }, 5000);
}
$().ready(function () { timerFaceUnlike();  });

function refreshAllViews(){
    mainPageRefresh();
    timelinePageRefresh();
    popUpPhotoRefresh();
    photoPageRefresh();
}

/////Refresh View By type///////////
function mainPageRefresh() {
    //debugger;
    $('span.uiStreamFooter span.UIActionLinks:not("span[DoneUnlike]")').each(function () {
        //get the ID
        var js = $($(this).parents('form')[0]).find('input[name="feedback_params"]').val();
        var id = jQuery.parseJSON(js).target_fbid
        appendTheUnlikeLink(this, id);

    })
}

function timelinePageRefresh() {
    //for timeline
    $('div.fbTimelineFeedbackHeader span.UIActionLinks:not("span[DoneUnlike]")').each(function () {
        //get the ID
        var js = $($(this).parents('div.timelineUnitContainer')[0]).attr('data-gt');
        var id = jQuery.parseJSON(js).aggregation_id
        appendTheUnlikeLink(this, id);
    })
}
function popUpPhotoRefresh() {
    $('div.fbPhotoSnowliftPopup span.UIActionLinks:not("span[DoneUnlike]")').each(function () {
        //get the ID
        var id = getParameterByName("fbid");
        appendTheUnlikeLink(this, id);
    })
}
function photoPageRefresh() {
    $('div.fbPhotosPhotoFeedback span.UIActionLinks:not("span[DoneUnlike]")').each(function () {
        //get the ID
        var id = getParameterByName("fbid");
        appendTheUnlikeLink(this, id);
    })
}

function appendTheUnlikeLink(obj, id) {
    if ($(obj).find('.unlikeLink').length == 0) {
        $(obj).prepend('<span><a  href="#" data="' + id + '" title="UnLike this item" class="UFILikeLink unlikeLink" id="unLinke' + id + '"><span>Hate</span></a></span> . ');
        $(obj).attr('DoneUnlike', '1');
    }
}
/////End Refresh View By type///////////

///////////utilities////////////
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}