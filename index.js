$( document ).ready(function() {
   
    let menuContent = getMenuContent();

    $(".hamburger").click((event) => {
        if ($(".menu").css("display") == "none") {
            $(".menu").css({"display": "flex"});
        } else {
            $(".menu").css({"display": "none"});
            var classState = $(event.target).css("color")
            console.log(classState);
        };
        
    });
    
    $(".menu li").click((event) => {
        animateBeerMug();
        $(".main-page-info").css({"display": "none"});
        
        var elementId = $(event.target).attr("id")
        $(".main-container").html(" ");

        switch(elementId) {
            case 'home':           
                $(".main-page-info").css({"display": "block"});
              break;
            case 'menu':
                createMenuContainer();
              break;
              case 'about':
                // code block
                break;
                case 'gallery':
                    // code block
                    break;
            default:
              // code block
          } 
        
        $("#food-menu li").click((event) => {
            $(".right-menu").html(" ");
            let elementId = $(event.target).attr("id");
            let content = createRightMenuContent(menuContent[elementId]);
            $(".right-menu").append(content);
    
    
        })
    });
 

    // $("#food-menu li").click(function() {

    //     var a = $(this).text()
    //     $(".current-food").html(a);

    // });





















});