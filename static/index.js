var mode = "f1"
var iszh = true
function chance( id ){
  mode = id
  Qmsg.success( "已切换至声音" + mode )
}

function play( text, voice ){
  var msg = Qmsg.loading( "音频加载中" )
  var audio = new Audio()
  audio.src = "/yukuuri.wav?t=" +
    encodeURIComponent( text.value ) + "&v=" + mode + (iszh ? "&zh=1" : "")
  audio.onloadstart = () => {
    audio.play()
    msg.close()
  }
}

function download( text, voice ){
  window.location.href = "/yukuuri.wav?t=" +
    encodeURIComponent( text.value ) + "&v=" +
    mode + (iszh ? "&zh=1" : "")
}

function zh( ele ){
  iszh = !iszh
  ele.innerHTML = ele.innerHTML === "启用中文" ?
    "禁用中文": "启用中文"
  Qmsg.success( "已" + ele.innerHTML )
}