let mainContainer = $(".main-container");



createMenuContainer = () => {
    let menuContainer = $("<div>").attr("class", "menu-container");
    let leftMenu = $("<div>").attr("class", "left-menu");
    let rightMenu = $("<div>").attr("class", "right-menu");

    $(menuContainer).append(leftMenu);
    $(menuContainer).append(rightMenu);
    $(mainContainer).append(menuContainer);
};

createAboutContainer = () => {
    let about = $("<div>").attr("class", "about");
    $(mainContainer).append(about);
};

