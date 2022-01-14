$(document).ready(function() { 
 
  var overlay = $('#overlay'); 
  var open_modal1 = $('.open_modal1'); 
  var open_modal2 = $('.open_modal2');
  var open_modal3 = $('.open_modal3');
  var open_modal4 = $('.open_modal4');
  var close = $('.modal_close, #overlay'); 
  var modal = $('.modal_div'); 
  var value = 0;
  var h6 = document.getElementsByTagName('h6')[0];
  h6.innerHTML = ('В корзине:  ' + value + '₽');


  open_modal1.click( function(event){
    event.preventDefault(); 
    var div = $(this).attr('href'); 
    overlay.fadeIn(400, function(){$(div).css('display', 'block').animate({opacity: 1, top: '50%'}, 200); 
    value += 120000;
    var h6 = document.getElementsByTagName('h6')[0];
    h6.innerHTML = ('В корзине: ' + value + '₽');
  });
});


  open_modal2.click( function(event){
    event.preventDefault(); 
    var div = $(this).attr('href'); 
    overlay.fadeIn(400, function(){$(div).css('display', 'block').animate({opacity: 1, top: '50%'}, 200); 
    value += 150000;
    var h6 = document.getElementsByTagName('h6')[0];
    h6.innerHTML = ('В корзине: ' + value + '₽');
  });
});

  open_modal3.click( function(event){ 
    event.preventDefault(); 
    var div = $(this).attr('href'); 
    overlay.fadeIn(400, function(){$(div).css('display', 'block').animate({opacity: 1, top: '50%'}, 200); 
    value += 20000;
    var h6 = document.getElementsByTagName('h6')[0];
    h6.innerHTML = ('В корзине: ' + value + '₽');
  });
});

  open_modal4.click( function(event){
    event.preventDefault(); 
    var div = $(this).attr('href'); 
    overlay.fadeIn(400, function(){$(div).css('display', 'block').animate({opacity: 1, top: '50%'}, 200); 
    value += 18050;
    var h6 = document.getElementsByTagName('h6')[0];
    h6.innerHTML = ('В корзине: ' + value + '₽');
  });
});
  
  close.click( function(){
    modal.animate({opacity: 0, top: '45%'}, 200, function(){$(this).css('display', 'none');
    overlay.fadeOut(400); 
  }
);
});
});
