$("#showmore").click(function(){
    $(".description-card").css({'height': '100%', 'transition': 'all .3s'});
    $("#showless").css('display','inline-block');
    $("#showmore").css('display','none');
  });

  $("#showless").click(function(){
    $(".description-card").css({'height': '4rem', 'transition': 'all .3s'});
    $("#showmore").css('display','inline-block');
    $("#showless").css('display','none');
  });  