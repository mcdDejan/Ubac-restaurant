let mainContainer = $(".main-container");

createRightMenuContent=(category)=>{
let menuContent = $('<div>').attr('class','flex right-menu-content-wrapper');
let headerWrapper = $('<div>').attr('class','flex right-menu-header-wrapper');
let header=$('<h1>').attr('class','right-menu-header').text(category.header);
let headerImageWrapper = $('<div>').attr('class','header-image-wrapper');
let headerImage = $('<img>').attr('src','./images/'+category.img);

let foodListContainer = $('<div>').attr('class','food-list-container');
let foodList=$('<ul>');
let foodArray = category.list;

foodArray.forEach((elem,index)=>{
    let item = $('<li>').attr('class','food-item-'+index).text(elem.foodName).append($('<span>').text(elem.foodPrice));
    $(foodList).append(item)
});

$(foodListContainer).append(foodList);

$(headerWrapper).append(header);
$(headerImageWrapper).append(headerImage);
$(headerWrapper).append(headerImageWrapper);
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
    let season = $("<li>").attr("id", "seasonSalad").text('Сезонски салати');
    let beer = $("<li>").attr("id", "beer").text('Пива');
    let spirits = $("<li>").attr("id", "wine").text('Вина');
    let wine = $("<li>").attr("id", "spirits").text('Жестоко 0,5');
    let softDrinks = $("<li>").attr("id", "softDrinks").text('Сокови');
    let coffe = $("<li>").attr("id", "coffe").text('Кафе');

    $(menuLogo).append(menuLogoImg);
    $(foodMenu).append(dayDish);
    $(foodMenu).append(bbq);
    $(foodMenu).append(salad);
    $(foodMenu).append(season);
    $(foodMenu).append(beer);
    $(foodMenu).append(wine);
    $(foodMenu).append(spirits);
    $(foodMenu).append(softDrinks);
    $(foodMenu).append(coffe);


    return [menuLogo, foodMenu]
};


createMenuContainer = (content) => {

    let menuContainer = $("<div>").attr("class", "flex menu-container");
    let leftMenu = $("<div>").attr("class", "left-menu");
    let rightMenu = $("<div>").attr("class", "right-menu");
    let leftMenuContentArray = createLeftMenuContent();

    
    $(leftMenu).append(leftMenuContentArray[0][0]);
    $(leftMenu).append(leftMenuContentArray[1][0]);
    $(menuContainer).append(leftMenu);
    $(menuContainer).append(rightMenu);
    $(mainContainer).append(menuContainer);

};

addClassActiveBtn=(element,cssClass,elemList)=>{

    for (let index = 0; index < elemList.length; index++) {
        $(elemList[index]).attr('class')==cssClass?$(elemList[index]).removeClass(cssClass):null;
        $(elemList[index]).css({'color':'rgb(131,0,0)'})
        
    }
    $(element).addClass(cssClass)
    $(element).css({'color':'rgba(255, 255, 255, 0.9)'});
};


