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

    $("#our").click(() => {
        
        if ($(".right-menu").css("display") == "none") {
            $(".right-menu").css({"display": "block"});
        } else {
            $(".right-menu").css({"display": "none"});
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