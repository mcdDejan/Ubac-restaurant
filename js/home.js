createHomeContainer = () =>{
    let homeContainer = $('<div>').attr('class',' flex home-container');

    let homeHeader = $('<h1>').text('Нашата локација');
    let homeP = $('<p>').text('( За оние кои не знаат )');

    let mapHolder = $('<div>').attr('class','map-holder').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.6226668761533!2d21.36567631544524!3d42.00837297921206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354139207a757dd%3A0x963228c0d8833b66!2sGostilnica%20Ubac!5e0!3m2!1sen!2smk!4v1582658463182!5m2!1sen!2smk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>');


    $(homeContainer).append(homeHeader);
    $(homeContainer).append(homeP);
    $(homeContainer).append(mapHolder);
    $(mainContainer).append(homeContainer);


};