$('.play-pause-button').on("click",function(){
    let audio2 = document.getElementById("audio-amee");
    let audio1 = document.getElementById("audio1");
    if($(this).hasClass('fa-play'))
     {
       $(this).removeClass('fa-play');
       $(this).addClass('fa-pause');
       $('#span-amee').addClass('pulse2');
       audio1.pause();
       $('#playerVolumeOff').css("display", "block");
       $('#playerVolumeOn').css("display", "none");
       audio2.play();
     }
    else
     {
       $(this).removeClass('fa-pause');
       $(this).addClass('fa-play');
       $('#span-amee').removeClass('pulse2');
       audio2.pause();
     }
  });