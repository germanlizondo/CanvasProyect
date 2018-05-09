
function ini(){
    var boton_play = document.getElementById("botonplay");
    var getback = document.getElementById("getback");
    var plus= document.getElementById("mas");
    var less = document.getElementById("menos");
    var vol = document.getElementById("vol");



    var volumen = 0.1;
    var video = document.getElementById("video");

    function play(){
        if(video.paused) {
           video.play();
            boton_play.innerHTML = "<img src=\"pause.png\" height=\"40\" width=\"40\">";
          } else {
            video.pause();
            boton_play.innerHTML = "<img src=\"play.png\" height=\"40\" width=\"40\">";
          }
    }      

    function reload(){
        video.load();
        video.play();
    }

    function subir(){
        video.volume =video.volume+volumen;
    }
    function bajar(){
        video.volume =video.volume-volumen;
    }

    function mute(){
        if(video.muted) {
            video.muted = false;
            vol.innerHTML = "<img src=\"volumen.png\" height=\"40\" width=\"40\">";
           } else {
             video.muted = true;
             vol.innerHTML = "<img src=\"novolumen.png\" height=\"40\" width=\"40\">";
           }
    }

  
    boton_play.addEventListener("click",play,false);
    getback.addEventListener("click",reload,false);
    plus.addEventListener("click",subir,false);
    less.addEventListener("click",bajar,false);
    vol.addEventListener("click",mute,false);
   
}



window.addEventListener("load",ini,false);

