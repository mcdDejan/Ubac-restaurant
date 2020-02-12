$( document ).ready(function() {
   
    let menuContent = getMenuContent();

    $(".hamburger").click((event) => {
        
        animateBeerMug();
        
        if ($(".menu").css("display") == "none") {
            $(".menu").css({"display": "flex"});
        } else {
            $(".menu").css({"display": "none"});
            var classState = $(event.target).css("color")
            console.log(classState);
        };

        if ($(".menu-container").css("display") == "flex") {
            $(".menu-container").css({"display": "none"});
        }else {
            $(".menu-container").css({"display": "flex"});
        };
        
    });


    $(".menu li").click((event) => {
        if (screen.width < 767) {
            $(".menu").css({"display": "none"});
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
                createAboutContainer();
                $(".main-page-info").css({"display": "block"});
                
                break;
                case 'gallery':
                    // code block
                    break;
            default:
              // code block
          };
        

        $("#food-menu li").click((event) => {
            if (screen.width < 767) {
                $(".left-menu").css({"display": "none"});
            }
            $(".right-menu").html(" ");
            let elementId = $(event.target).attr("id");
            let content = createRightMenuContent(menuContent[elementId]);
            $(".right-menu").append(content);
        });

    });
    

    
 

    // $("#food-menu li").click(function() {

    //     var a = $(this).text()
    //     $(".current-food").html(a);

    // });





















});