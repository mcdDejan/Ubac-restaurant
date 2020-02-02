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



























});