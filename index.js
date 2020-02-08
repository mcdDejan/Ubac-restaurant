$( document ).ready(function() {
   

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
        if ($(".menu-container").css("display") == "none") {
            $(".menu-container").css({"display": "flex"});
        } else {
            $(".menu-container").css({"display": "none"});
        };

        
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