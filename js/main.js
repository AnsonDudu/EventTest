$("#point1").on("tap",function(){
  $(this).addClass('animated shake');
  window.setTimeout(function(){
  $('#point1').removeClass('animated shake');
  },2000);

  function showdiv(){
  	$('#detail1').animate({
		"width": "360px",
		"height": "180px",
		"top" : "250px",
		"padding" : "20px"
  	},500,'linear');
  }

  window.setTimeout(showdiv,1000);
});

