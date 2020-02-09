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
    
        },7000);
    }
    $('.leva-krigla').addClass('open-left');
    $('.desna-krigla').addClass('open-right');

    setTimeout(()=>{
        $('.leva-krigla').css({'left':'-50vw'});
        $('.desna-krigla').css({'right':'-50vw'});

    },7000);
    

};