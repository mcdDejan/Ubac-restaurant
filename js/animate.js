animateBeerMug=()=>{
    let elemClassArray=$('.leva-krigla').attr('class').split(' ');
    let classExists = elemClassArray.find((cssClass)=>{
        return cssClass == 'open-left'
    });

    if(classExists=='open-left'){
        $('.leva-krigla').addClass('open-close-left');
        $('.desna-krigla').addClass('open-close-right');
        setTimeout(()=>{
            $('.leva-krigla').removeClass('open-close-left');
            $('.desna-krigla').removeClass('open-close-right');
    
        },2000);
    }else{

        $('.leva-krigla').addClass('open-left');
        $('.desna-krigla').addClass('open-right');
        
    setTimeout(()=>{
        $('.leva-krigla').css({'left':'-50vw'});
        $('.desna-krigla').css({'right':'-50vw'});
        
    },3000);
}
    
};


mapGrow=()=> {
    if (screen.width < 767) {
    $('.home-container').addClass('grow-responsive');
    } else {
        $('.home-container').addClass('grow');
    };
};


moveInOut=()=>{
    let elemClassArray=$('.menu').attr('class').split(' ');
    let classExists = elemClassArray.find((cssClass)=>{
    return cssClass == 'move-out'
    });

    if(classExists=='move-out' || $(".menu").css("display") == "none"){
        $(".menu").css({"display": "flex"});
        $('.menu').removeClass('move-out');
        $('.menu').addClass('move-in');
        $(".main-page-info").css({"display": "block"});
        
    }else{
        $('.menu').addClass('move-out');
            setTimeout(()=>{
                $(".menu").css({"display": "none"});
            },1900);
        };

};

moveIn=()=>{
    $('.menu-container').addClass('move-in');
    $('.about-container').addClass('move-in');
    $('.gallery-container').addClass('move-in');
}; 
// moveIn() ja dodava klasata samo na kliknatiot container, poso drugite ne postojat

moveOutMenu=()=>{
    $('.menu').removeClass('move-in');
    $('.menu').addClass('move-out');
};