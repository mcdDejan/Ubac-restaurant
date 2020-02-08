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
        
        var elementId = $(event.target).attr("id")
        console.log(elementId);
        $(".main-container").html(" ");

        switch(elementId) {
            case 'home':
              // code block
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
            console.log(menuContent[elementId])
            let content = createRightMenuContent(menuContent[elementId]);
            $(".right-menu").append(content);
    
    
        })
    });
 
    
    // $("#our").click(() => {
        
    //     if ($(".our").css("display") == "none") {
    //         $(".our").css({"display": "flex"});
    //     } else {
    //         $(".our").css({"display": "none"});
    //     };
    // });

    $("#food-menu li").click(function() {

        var a = $(this).text()
        $(".current-food").html(a);

    });





















});