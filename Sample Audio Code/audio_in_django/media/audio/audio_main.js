function __fire(e, data) {    
  log.innerHTML += "\n" + e + " " + (data || '');
}

var audio_context;
var recorder;

function iCanHazUserMedia(stream) {
  __fire('I haz live stream');
  var input = audio_context.createMediaStreamSource(stream);
  input.connect(audio_context.destination);
  __fire('input connected to destination');
  recorder = new Recorder(input);
  __fire('recorder init\'d');
}

function startRecording(me) {
  recorder && recorder.record();
  me.disabled = true;
  me.nextSibling.disabled = false;
  __fire('recording....');
}


function stopRecording(me) {
  recorder && recorder.stop();
  me.disabled = true;
  me.previousSibling.disabled = false;
  __fire('nuff recording');
  
  recorder && recorder.exportWAV(function(blob) {
    var url = URL.createObjectURL(blob);
    var li = document.createElement('li');
    var au = document.createElement('audio');
    var hf = document.createElement('a');
    au.controls = true;
    au.src = url;
    hf.href = url;
    hf.download = new Date().toISOString() + '.wav';
    hf.innerHTML = hf.download;
    li.appendChild(au);
    li.appendChild(hf);
    recordingslist.appendChild(li);
  });
  
  recorder.clear(); 
}


onload = function init(){
  try {
    // shim      
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    window.URL = window.URL || window.webkitURL
    
    audio_context = new AudioContext;
    __fire('Audio context OK');
    __fire('navigator.getUserMedia ' + (navigator.getUserMedia ? 'OK' : 'fail'));
  } catch (e) {
    alert('No web audio support in this browser');
  }
  
  navigator.getUserMedia(
    {audio:true},
    iCanHazUserMedia, 
    function(e){__fire('No live audio input ' + e);}
  );
  
};