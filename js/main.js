// 触摸事件绑定
$("#point1").on("tap",function(){
  $(".detail").addClass('hide');
  $(this).addClass('tada');
  window.setTimeout(function(){
  $('.point').removeClass('tada');
  },1500);


  function showdiv(){
  	$('#detail1').animate({
		"width": "360px",
		"height": "180px",
		"top" : "100px",
		"padding" : "20px",
  	},500,'linear');

    $('#detail1').removeClass('hide')
  }

  window.setTimeout(showdiv,500);

  $('#background').on("tap",function(){
    $("#detail1").addClass('hide');
  })

})

$("#point2").on("tap",function(){
  $(".detail").addClass('hide');
  $(this).addClass('tada');
  window.setTimeout(function(){
  $('.point').removeClass('tada');
  },1500);


  function showdiv(){
    $('#detail2').animate({
    "width": "360px",
    "height": "180px",
    "padding" : "20px",
    },500,'linear');

    $('#detail2').removeClass('hide')
  }

  window.setTimeout(showdiv,500);

  $('#background').on("tap",function(){
    $("#detail2").addClass('hide');
  })

})

$("#point3").on("tap",function(){
  $(".detail").addClass('hide');
  $(this).addClass('tada');
  window.setTimeout(function(){
  $('.point').removeClass('tada');
  },1500);

  function showdiv(){
    $('#detail3').animate({
    "width": "360px",
    "height": "180px",
    "top" : "145px",
    "left" : "50px",
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
  $(".detail").addClass('hide');
  $(this).addClass('tada');
  window.setTimeout(function(){
  $('.point').removeClass('tada');
  },1500);


  function showdiv(){
    $('#detail4').animate({
    "width": "360px",
    "height": "180px",
    "top" : "50px",
    "left" : "275px",
    "padding" : "20px",
    },500,'linear');

    $('#detail4').removeClass('hide')
  }

  window.setTimeout(showdiv,500);

  $('#background').on("tap",function(){
    $("#detail4").addClass('hide');
  })

})

// 横屏等待画面

window.addEventListener("orientationchange", function() {
  $("#waiting").removeClass('hide');
  $(".bubbles").addClass('hide');
  window.setTimeout(function(){
    $(".bubbles").removeClass('hide');
    $("#waiting").addClass('hide');
    $(".point").addClass('rubberBand');
  },3000)
}, false);