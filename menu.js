let mainContainer = $(".main-container");


createLeftMenuContent = () => {
    let menuLogo = $("<div>").attr("class", "menu-logo");
    let menuLogoImg = $("<img>").attr("./images/logo-ubac.jpg");
    
    let foodMenu = $("<ul>").attr("id", "food-menu");
    let dayDish = $("<li>").attr("id", "dayDish");
    let bbq = $("<li>").attr("id", "bbq");
    let salad = $("<li>").attr("id", "salad");
    let season = $("<li>").attr("id", "season");
    let beer = $("<li>").attr("id", "beer");
    let spirits = $("<li>").attr("id", "spirits");
    let wine = $("<li>").attr("id", "wine");
    let softDrinks = $("<li>").attr("id", "softDrinks");
    let coffe = $("<li>").attr("id", "coffe");

    $(menuLogo).append(menuLogoImg);
    $(foodMenu).append(dayDish);
    $(foodMenu).append(bbq);
    $(foodMenu).append(salad);
    $(foodMenu).append(season);
    $(foodMenu).append(beer);
    $(foodMenu).append(spirits);
    $(foodMenu).append(wine);
    $(foodMenu).append(softDrinks);
    $(foodMenu).append(coffe);


    return [menuLogo, foodMenu]
};


createMenuContainer = () => {
    let menuContainer = $("<div>").attr("class", "menu-container");
    let leftMenu = $("<div>").attr("class", "left-menu");
    let rightMenu = $("<div>").attr("class", "right-menu");
    let leftMenuContentArray = createLeftMenuContent();
    console.log(leftMenuContentArray)

    $(leftMenu).append(leftMenuContentArray[0]);
    $(leftMenu).append(leftMenuContentArray[1]);
    $(menuContainer).append(leftMenu);
    $(menuContainer).append(rightMenu);
    $(mainContainer).append(menuContainer);
};


