$(function() {
    let square = '<div class="square"></div>'
    let screenWidth = $(window).width()
    let screenHeight = $(window).height();
    console.log(screenHeight)
    let squareCount = (screenWidth / 10 ) * (screenHeight / 10);
    let activeSquareCount = squareCount/30
    for (let x=0; x < squareCount; x++) {
      $('#squares').append(square)
    }
  
    let squares = $('.square')
    let title = $('#title')
    $(title).fadeIn(2000)
  
    let confettiEffect = function(){
      let random = Math.floor(Math.random()*squareCount);
      let $element = $(squares[random]) 
      
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
      
      for (let i=0; i < activeSquareCount; i++){
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
