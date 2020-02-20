getPictures = () => {
    const pictures = {
        bbq: ['skara-1.jpg', 'skara-2.jpg', 'skara-3.jpg', 'skara-4.jpg'],
        salad: ['salati-1.jpg', 'salati-2.jpg', 'salati-3.jpg', 'salati-4.jpg'],
        location: ['lokacija-1.jpg', 'lokacija-2.jpg', 'lokacija-3.jpg', 'lokacija-4.jpg']
    }
    return pictures;
};

makeGallery = (categories) => {
    let categoriesText = ['Скара', 'Салати', 'Локација']
    let galleryContainer = $('<div>').attr('class', 'flex gallery-container');
    let galleryCategoryWrapper = $('<ul>').attr('class', 'flex gallery-category-wrapper');

    categories.forEach((elem, index) => {
        let item = $('<li>').attr('class', 'category-btn-' + index).text(categoriesText[index]);
        $(galleryCategoryWrapper).append(item);
    });

    let gallerySlideWrapper = $('<div>').attr('class', 'flex gallery-slide-wrapper');
    let prevBtn = $('<div>').attr('class', 'gallery-btn').html('<i class="fas fa-arrow-circle-left"></i>');
    let nextBtn = $('<div>').attr('class', 'gallery-btn').html('<i class="fas fa-arrow-circle-right"></i>');
    let slideHolder = $('<div>').attr('class', 'flex slide-holder');
    let slide = $('<img>').attr('class', 'slide');
    $(slideHolder).append(slide);

    $(gallerySlideWrapper).append(prevBtn);
    $(gallerySlideWrapper).append(slideHolder);
    $(gallerySlideWrapper).append(nextBtn);

    $(galleryContainer).append(galleryCategoryWrapper);
    $(galleryContainer).append(gallerySlideWrapper);
    console.log(galleryContainer)
    return galleryContainer
};

showPicture=(picName)=>{
$('.slide-holder img').attr('src','./images/gallery-images/'+picName);
}

let counter = -1;
let catCounter =0;
let allPictures = getPictures();
let pictureCategories = Object.keys(allPictures);
gallerySlideShow=()=>{
    if(counter>allPictures[pictureCategories[catCounter]].length-1){
        counter=0;
        catCounter+=1;
    };
    if(counter<0){
        counter=allPictures[pictureCategories[catCounter]].length-1;
        catCounter-=1;
    };
    catCounter>=pictureCategories.length?catCounter=0:null;
    catCounter<0?catCounter=pictureCategories.length-1:null;

    showPicture(allPictures[pictureCategories[catCounter]][counter])
};

createGalleryContainer = () => {
    let allPictures = getPictures();
    let pictureCategories = Object.keys(allPictures);
    let pictures = [[],[],[]]
    pictureCategories.forEach((elem,index) => {
        pictures[index].push(allPictures[elem])
    });
    let gallery = makeGallery(pictureCategories);
    $('.main-container').append(gallery);

 $('li[class^="category-btn-"]').click(event=>{
    let cssClass = $(event.target).attr('class').split('-');
    cssClass = parseInt(cssClass[cssClass.length-1]);
    catCounter=cssClass;
    counter=0;
    showPicture(allPictures[pictureCategories[catCounter]][counter])
 });

$('.gallery-btn').click(event=>{
    let elemCss = $(event.target).attr('class').split('-');
    elemCss = elemCss[elemCss.length-1]
    elemCss=='right'?counter+=1:counter-=1;
    gallerySlideShow()
});

setInterval(()=>{
    counter+=1
    gallerySlideShow()
},5000);
 
showPicture('lokacija-1.jpg')

}



