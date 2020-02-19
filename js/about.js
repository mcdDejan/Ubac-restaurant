createAboutContainer = () => {
    let aboutContainer = $("<div>").attr("class", "about-container");
    let aboutHeader = $("<h2>").attr("class", "about-header").text("Гостилница Убац");
    let aboutContent = $("<p>").attr("class", "about-content").text("Гостилница Убац е докажано мирно место, за убав провод со вкусна скара, салати и мезиња. Дојдете и уживајте")

    $(aboutContainer).append(aboutHeader);
    $(aboutContainer).append(aboutContent);
    $(mainContainer).append(aboutContainer);

};