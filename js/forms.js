/**
 * Created by scott on 2016-09-25.
 */
$(document).ready(function(){
  alert("jquery is working");
  $('button').click(function(){
 $("button").removeClass("selected");
  $(this).addClass("selected");

  });



});//end ready
