//onload
var channels = new Array();

fillChannels();
var isPlay = false;
if (localStorage["selectedChannel"] == undefined)
    localStorage["selectedChannel"] = 1;

if (localStorage["selectedVolume"] == undefined)
    localStorage["selectedVolume"] = 4;

var testVar = null;


setAudioSource(localStorage["selectedChannel"]);
//playAudio();
//pauseAudio();

//////////////////////functions///////////////////////
function resetAudioDrive() {
    document.getElementById("audio").addEventListener('play', function () {
        
        console.log('play ' + document.getElementById("audio").src);
    }, false);
    document.getElementById("audio").addEventListener('pause', function () {
        
        console.log('pause ' + document.getElementById("audio").src);
    }, false);
    document.getElementById("audio").addEventListener('load', function () {
        
        console.log('load ' + document.getElementById("audio").src);
    }, false);
    document.getElementById("audio").addEventListener('canplaythrough', function () {
        
        console.log('canplaythrough ' + document.getElementById("audio").src);
    }, false);
    document.getElementById("audio").addEventListener('loadeddata', function () {
        
        console.log('loadeddata ' + document.getElementById("audio").src);
    }, false);
    document.getElementById("audio").addEventListener('readystatechange', function () {
        
        console.log('readystatechange ' + document.getElementById("audio").src);
    }, false);
    document.getElementById("audio").addEventListener('stalled', function () {
        
        console.log('stalled ' + document.getElementById("audio").src);
    }, false);
    document.getElementById("audio").addEventListener('suspend', function () {
        
        console.log('suspend ' + document.getElementById("audio").src);
    }, false);
    document.getElementById("audio").addEventListener('waiting', function () {
        
        console.log('waiting ' + document.getElementById("audio").src);
    }, false);
    document.getElementById("audio").addEventListener('canplay', function () {
        
        console.log('canplay ' + document.getElementById("audio").src);
    }, false);


    document.getElementById("audio").addEventListener('error', function () {
        if (tryAgain) {
            playAudio();
            tryAgain = false;
            console.log('error - Try Again - ' + document.getElementById("audio").src);
        } else {
            tryAgain = true;
            document.getElementById("audio").src = 'point1sec.mp3';
            console.log('error ' + document.getElementById("audio").src);
        }
        isPlay = false;
    }, false);


    setVolume(parseInt(localStorage["selectedVolume"]));
}

var tryAgain = true;

function setAudioSource(id) {
    //unload
    document.getElementById("audio").src = 'point1sec.mp3';
    document.getElementById("audio").load();
    //load new one
    localStorage["selectedChannel"]=id;
    isPlay = false;
}

function playAudio() {
    document.getElementById("audio").src = channels[parseInt(localStorage["selectedChannel"])];
    document.getElementById("audio").load()
    document.getElementById("audio").play();
    isPlay = true;
    resetAudioDrive();
}
function pauseAudio() {
    document.getElementById("audio").src = 'point1sec.mp3';
    document.getElementById("audio").load()
    isPlay = false;
}

function setVolume(vol) {
    document.getElementById("audio").volume = parseFloat(vol / 10);
}
function getDuration() {
    var s = parseInt(document.getElementById("audio").currentTime % 60);
    var m = parseInt((document.getElementById("audio").currentTime / 60) % 60);
    if (s < 10)
        s = '0' + s;
    if (m < 10)
        m = '0' + m;
    return m + ' : ' + s;
}

////////////Channnels//////////////////
function fillChannels() {
    channels.push(''); //0
    channels.push('http://50.22.217.209:9998/;stream.nsv&type=mp3&autostart=true'); //1
    channels.push('http://50.22.217.209:9992/;stream.nsv&type=mp3&autostart=true'); //2
    channels.push('http://50.22.217.209:9996/;stream.nsv&type=mp3&autostart=true'); //3
    channels.push('http://50.22.217.209:9990/;stream.nsv&type=mp3&autostart=true'); //4
    channels.push('http://50.22.217.209:9988/;stream.nsv&type=mp3&autostart=true'); //5
    channels.push('http://50.22.217.209:9986/;stream.nsv&type=mp3&autostart=true'); //6
    channels.push('http://50.22.217.209:9984/;stream.nsv&type=mp3&autostart=true'); //7
    channels.push('http://50.22.217.209:9982/;stream.nsv&type=mp3&autostart=true'); //8
    channels.push('http://50.22.217.209:9980/;stream.nsv&type=mp3&autostart=true'); //9
    channels.push('http://50.22.217.209:9994/;stream.nsv&type=mp3&autostart=true'); //10
    channels.push('http://50.22.217.209:9978/;stream.nsv&type=mp3&autostart=true'); //11
    channels.push('http://50.22.217.209:9976/;stream.nsv&type=mp3&autostart=true'); //12
    channels.push('http://50.22.217.209:9974/;stream.nsv&type=mp3&autostart=true'); //13
    channels.push('http://50.22.217.209:9970/;stream.nsv&type=mp3&autostart=true'); //14
    channels.push('http://50.22.217.209:9972/;stream.nsv&type=mp3&autostart=true'); //15
    channels.push('http://50.22.217.209:9968/;stream.nsv&type=mp3&autostart=true'); //16
    channels.push('http://50.22.217.209:9966/;stream.nsv&type=mp3&autostart=true'); //17
    channels.push('http://50.22.217.209:9964/;stream.nsv&type=mp3&autostart=true'); //18
    channels.push('http://50.22.217.209:9962/;stream.nsv&type=mp3&autostart=true'); //19
    channels.push('http://50.22.217.209:9958/;stream.nsv&type=mp3&autostart=true'); //20
    channels.push('http://50.22.217.209:9960/;stream.nsv&type=mp3&autostart=true'); //21
    channels.push('http://50.22.217.209:9956/;stream.nsv&type=mp3&autostart=true'); //22
    channels.push('http://50.22.217.209:9954/;stream.nsv&type=mp3&autostart=true'); //23
    channels.push('http://50.22.217.209:9952/;stream.nsv&type=mp3&autostart=true'); //24
    channels.push('http://50.22.217.209:9950/;stream.nsv&type=mp3&autostart=true'); //25
    channels.push('http://50.22.217.209:9948/;stream.nsv&type=mp3&autostart=true'); //26
    channels.push('http://50.22.217.209:9946/;stream.nsv&type=mp3&autostart=true'); //27
}
