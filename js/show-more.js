$("#showmore").click(function(){
    $(".description-card").css('height','100%');
    $("#showless").css('display','block');
    $("#showmore").css('display','none');
  });

  $("#showless").click(function(){
    $(".description-card").css('height','4rem');
    $("#showless").css('display','none');
    $("#showmore").css('display','block');
  });  