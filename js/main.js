// 触摸事件绑定
$("#point1,#bubble1").on("tap",function(){
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

$("#point2,#bubble2").on("tap",function(){
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

$("#point3,#bubble3").on("tap",function(){
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
  });
})

$("#point4,#bubble4").on("tap",function(){
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

// 匠人打气值
function addOil(){

  var count = 0;

  $("#point1").one("tap",function(){
    count ++;
    console.log(count);
    if(count === 1){
      $("#countImg").attr({src:"images/addoil_1.png"})
    }
    else if(count === 2){
      $("#countImg").attr({src:"images/addoil_2.png"})
    }
    else if(count === 3){
      $("#countImg").attr({src:"images/addoil_3.png"})
    }
    else if(count === 4){
      $("#countImg").attr({src:"images/addoil_4.png"})
      $("#countP").text("恭喜你已为所有匠人加油打气，想传承这份精神的请点击相关图标“了解更多”")
    }
  })
  $("#point2").one("tap",function(){
    count ++;
    console.log(count);
    if(count === 1){
      $("#countImg").attr({src:"images/addoil_1.png"})
    }
    else if(count === 2){
      $("#countImg").attr({src:"images/addoil_2.png"})
    }
    else if(count === 3){
      $("#countImg").attr({src:"images/addoil_3.png"})
    }
    else if(count === 4){
      $("#countImg").attr({src:"images/addoil_4.png"})
      $("#countP").text("恭喜你已为所有匠人加油打气，想传承这份精神的请点击相关图标“了解更多”")
    }
  })
  $("#point3").one("tap",function(){
    count ++;
    console.log(count);
    if(count === 1){
      $("#countImg").attr({src:"images/addoil_1.png"})
    }
    else if(count === 2){
      $("#countImg").attr({src:"images/addoil_2.png"})
    }
    else if(count === 3){
      $("#countImg").attr({src:"images/addoil_3.png"})
    }
    else if(count === 4){
      $("#countImg").attr({src:"images/addoil_4.png"})
      $("#countP").text("恭喜你已为所有匠人加油打气，想传承这份精神的请点击相关图标“了解更多”")
    }
  })
  $("#point4").one("tap",function(){
    count ++;
    console.log(count);
    if(count === 1){
      $("#countImg").attr({src:"images/addoil_1.png"})
    }
    else if(count === 2){
      $("#countImg").attr({src:"images/addoil_2.png"})
    }
    else if(count === 3){
      $("#countImg").attr({src:"images/addoil_3.png"})
    }
    else if(count === 4){
      $("#countImg").attr({src:"images/addoil_4.png"})
      $("#countP").text("恭喜你已为所有匠人加油打气，想传承这份精神的请点击相关图标“了解更多”")
    }
  })


}

addOil();





// 横屏等待画面

function loading(){
  $("#waiting").removeClass('hide');
  $(".bubbles").addClass('hide');

  window.setTimeout(function(){
      $(".bubbles").removeClass('hide');
      $("#waiting").addClass('hide');
      $(".point").addClass('rubberBand')
  },2500)
}

window.addEventListener("load",loading);
window.addEventListener("orientationchange",loading);