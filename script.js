$(function() {
    let square = '<div class="square"></div>'
    let screenWidth = $('body').width();
    let squareCount = (screenWidth / 10 ) * 100;
    for (let x=0; x < squareCount; x++) {
      $('#squares').append(square)
    }
  
    let squares = $('.square')
    let title = $('#title')
    
    let confettiEffect = function(){
      let random = Math.floor(Math.random()*(squares.length));
      let $element = $(squares[random]) 
      $(title).fadeIn(2000)
      $element
        .removeClass(classes.join(" "))
        .addClass(classes[Math.floor(Math.random()*classes.length)])
        // .fadeOut(800)
      
      setTimeout(function() {
         $element.removeClass(classes.join(" "))
       }, 800);
    }
    
    let clickConfettiEffect = function(){
      $(title).fadeIn(2000)
      
      for (let i=0; i < 300; i++){
        let random = Math.floor(Math.random()*(squares.length));
        let $element = $(squares[random]) 
        let randomTime = Math.floor(Math.random()*3000);
        
        setTimeout(function(){
          $element
            .removeClass(classes.join(" "))
            .addClass(classes[Math.floor(Math.random()*classes.length)])
            // .fadeOut(800)
          
          setTimeout(function() {
             $element.removeClass(classes.join(" "))
           }, 800);
        }, randomTime)



      }

    }
    
    let classes = ["pink", "orange", "yellow"]
    $('body').mousemove(confettiEffect);
    $('body').click(clickConfettiEffect);
    clickConfettiEffect();
  
  
    
});
