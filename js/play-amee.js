$('.play-pause-button').on("click",function(){
    let audio2 = document.getElementById("audio-amee");
    if($(this).hasClass('fa-play'))
     {
       $(this).removeClass('fa-play');
       $(this).addClass('fa-pause');
       audio2.play();
     }
    else
     {
       $(this).removeClass('fa-pause');
       $(this).addClass('fa-play');
       audio2.pause();
     }
  });