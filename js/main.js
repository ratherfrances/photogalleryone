$(document).ready(function(){
  $('.changeTextButton').click(function(){
    $(this).siblings('.moreText').slideToggle(500);
    if($(this).attr('src')=='img/more-button.png'){
      $(this).attr('src','img/less-button.png');
    }
    else {
      $(this).attr('src','img/more-button.png');
    }
  });
});
