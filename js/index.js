$( document ).ready(function() {
   
    let menuContent = getMenuContent();

    $(".start-cover-img").css({"display": "none"}); // temporary corona

    $(".hamburger").click((event) => {
        
        $(".corona").css({"display": "none"}); // temporary corona
        animateBeerMug();
        moveInOut();

        $(".main-container").html(" ");
    });

    
    $(".menu li").click((event) => {
        $(".corona").css({"display": "none"}); // temporary corona
        $(".start-cover-img").css({"display": "flex"}) // temporary corona
        animateBeerMug();
        addClassActiveBtn(event.target,'menu-active',$('.menu li'));
        if (screen.width < 768) {
            moveOutMenu();
            setTimeout(()=>{
                $(".menu").css({"display": "none"});
            },900);
            $(".main-page-info").css({"display": "none"});
        };
        
        var elementId = $(event.target).attr("id")
        $(".main-container").html(" ");
    
        switch(elementId) {
            case 'home':           
                $(".main-page-info").css({"display": "block"});
                setTimeout(()=> {
                    createHomeContainer();
                    mapGrow();
                }, 1500)
                break;

            case 'menu':
                createMenuContainer();
                moveIn();
                $(".right-menu").html(" ");
                let content = createRightMenuContent(menuContent.dayDish);
                if (screen.width > 767) {
                    addClassActiveBtn($('#dayDish'),'left-menu-active',$('#food-menu li'))
                    $(".right-menu").append(content);
                };
                break;

            case 'about':
                createAboutContainer();
                moveIn();
                $(".main-page-info").css({"display": "block"});
                break;

            case 'gallery':
                setTimeout(()=> {
                createGalleryContainer();
                moveIn();
                }, 1500)
                $(".main-page-info").css({"display": "none"});
                break;

            default:
              // code block
          };
        

        $("#food-menu li").click((event) => {
            addClassActiveBtn(event.target,'left-menu-active',$('#food-menu li'))

            if (screen.width < 768) {
                $("#food-menu").addClass('food-menu-x');
                $(".left-menu ul li").addClass('left-menu-x');
            };
            
            $(".right-menu").html(" ");
            let elementId = $(event.target).attr("id");
            let content = createRightMenuContent(menuContent[elementId]);
            $(".right-menu").append(content);
        });

    });














});