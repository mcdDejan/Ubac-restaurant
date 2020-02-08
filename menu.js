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
createMenuContainer = (content) => {
   let rightMenuContent= createRightMenuContent(content.bbq)

    let menuContainer = $("<div>").attr("class", "menu-container");
    let leftMenu = $("<div>").attr("class", "left-menu");
    let rightMenu = $("<div>").attr("class", "right-menu");
    let leftMenuContentArray = createLeftMenuContent();
    console.log(leftMenuContentArray)

    $(rightMenu).append(rightMenuContent)

    $(menuContainer).append(leftMenu);
    $(menuContainer).append(rightMenu);
    $(mainContainer).append(menuContainer);
};

