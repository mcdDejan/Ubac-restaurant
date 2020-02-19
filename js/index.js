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

        $(".main-container").html(" ");
    });


    $(".menu li").click((event) => {
        if (screen.width < 767) {
            $(".menu").css({"display": "none"});
        };
    });


    
    $(".menu li").click((event) => {
        animateBeerMug();
        addClassActiveBtn(event.target,'menu-active',$('.menu li'));
        if(screen.width<768){

            $(".main-page-info").css({"display": "none"});
        }
        
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
                    createGalleryContainer();
                    $(".main-page-info").css({"display": "none"});

                    break;
            default:
              // code block
          };
        

        $("#food-menu li").click((event) => {
            addClassActiveBtn(event.target,'left-menu-active',$('#food-menu li'))

            if (screen.width < 767) {
                $("#food-menu").css({"display": "flex", "overflow-x": "auto", "align-items": "strech"});
                $(".left-menu ul li").css({"display": "flex", "align-items": "center", "background-color": "rgba(131, 0, 0, 0.4)","border-radius": "10px", "padding": "5px", "margin": "5px"});
                $(".right-menu-header").css({"margin": "7px"});
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