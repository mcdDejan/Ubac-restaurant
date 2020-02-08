let mainContainer = $(".main-container");

createRightMenuContent=(category)=>{
let menuContent = $('<div>').attr('class','flex left-menu-content-wrapper');
let headerWrapper = $('<div>').attr('class','flex left-menu-header-wrapper');
let header=$('<h1>').attr('class','left-menu-header').text(category.header);
let headerImage = $('<img>').attr('src','./images/'+category.img);

let foodListContainer = $('<div>').attr('class','flex food-list-container');
let foodList=$('<ul>');
let foodArray = category.list;

foodArray.forEach((elem,index)=>{
    let item = $('<li>').attr('class','food-item-'+index).text(elem.foodName).append($('<span>').text(elem.foodPrice));
    $(foodList).append(item)
});

$(foodListContainer).append(foodList);

$(headerWrapper).append(header);
$(headerWrapper).append(headerImage);
$(menuContent).append(headerWrapper);
$(menuContent).append(foodListContainer);
return menuContent

};

createLeftMenuContent = () => {
    let menuLogo = $("<div>").attr("class", "menu-logo");
    let menuLogoImg = $("<img>").attr("src","./images/logo-ubac.jpg");
    
    let foodMenu = $("<ul>").attr("id", "food-menu")
    let dayDish = $("<li>").attr("id", "dayDish").text('Наш предлог');
    let bbq = $("<li>").attr("id", "bbq").text('Скара');
    let salad = $("<li>").attr("id", "salad").text('Салати');
    let season = $("<li>").attr("id", "season").text('Сезонски салати');
    let beer = $("<li>").attr("id", "beer").text('Пива');
    let spirits = $("<li>").attr("id", "spirits").text('Вина');
    let wine = $("<li>").attr("id", "wine").text('Жестоко 0,5');
    let softDrinks = $("<li>").attr("id", "softDrinks").text('Сокови');
    let coffe = $("<li>").attr("id", "coffe").text('Кафе');

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


createMenuContainer = (content) => {

    let menuContainer = $("<div>").attr("class", "menu-container");
    let leftMenu = $("<div>").attr("class", "left-menu");
    let rightMenu = $("<div>").attr("class", "right-menu");
    let leftMenuContentArray = createLeftMenuContent();
    console.log(leftMenuContentArray[0][0])

    
    $(leftMenu).append(leftMenuContentArray[0][0]);
    $(leftMenu).append(leftMenuContentArray[1][0]);
    $(menuContainer).append(leftMenu);
    $(menuContainer).append(rightMenu);
    $(mainContainer).append(menuContainer);

};

