
// 触摸事件绑定
$("#point1").on("tap",function(){
  $(this).addClass('animated shake');
  window.setTimeout(function(){
  $('#point1').removeClass('animated shake');
  },2000);


  function showdiv(){
  	$('#detail1').animate({
		"width": "360px",
		"height": "180px",
		"top" : "200px",
		"padding" : "20px",
  	},500,'linear');

    $('#detail1').removeClass('hide')
  }

  window.setTimeout(showdiv,500);

  $('#background').on("tap",function(){
    $("#detail1").addClass('hide')
  })

})

$("#point2").on("tap",function(){
  $(this).addClass('animated shake');
  window.setTimeout(function(){
  $('#point2').removeClass('animated shake');
  },2000);


  function showdiv(){
    $('#detail2').animate({
    "width": "360px",
    "height": "180px",
    "top" : "250px",
    "padding" : "20px",
    },500,'linear');

    $('#detail2').removeClass('hide')
  }

  window.setTimeout(showdiv,500);

  $('#background').on("tap",function(){
    $("#detail2").addClass('hide')
  })

})


$("#point2").on("tap",function(){
  $(this).addClass('animated shake');
  window.setTimeout(function(){
  $('#point2').removeClass('animated shake');
  },2000);


  function showdiv(){
    $('#detail2').animate({
    "width": "360px",
    "height": "180px",
    "top" : "250px",
    "padding" : "20px",
    },500,'linear');

    $('#detail2').removeClass('hide')
  }

  window.setTimeout(showdiv,500);

  $('#background').on("tap",function(){
    $("#detail2").addClass('hide')
  })

})


$("#point3").on("tap",function(){
  $(this).addClass('animated shake');
  window.setTimeout(function(){
  $('#point3').removeClass('animated shake');
  },2000);


  function showdiv(){
    $('#detail3').animate({
    "width": "360px",
    "height": "180px",
    "top" : "200px",
    "left" : "100px",
    "padding" : "20px",
    },500,'linear');

    $('#detail3').removeClass('hide')
  }

  window.setTimeout(showdiv,500);

  $('#background').on("tap",function(){
    $("#detail3").addClass('hide')
  })

})

$("#point4").on("tap",function(){
  $(this).addClass('animated shake');
  window.setTimeout(function(){
  $('#point4').removeClass('animated shake');
  },2000);


  function showdiv(){
    $('#detail4').animate({
    "width": "360px",
    "height": "180px",
    "top" : "150px",
    "left" : "275px",
    "padding" : "20px",
    },500,'linear');

    $('#detail4').removeClass('hide')
  }

  window.setTimeout(showdiv,500);

  $('#background').on("tap",function(){
    $("#detail4").addClass('hide')
  })

})

