getPictures = () => {
    const pictures = {
        bbq: ['bbq-1.jpg', 'bbq-2.jpg', 'bbq-3.jpg', 'bbq-4.jpg'],
        salad: ['salad-1.jpg', 'salad-2.jpg', 'salad-3.jpg', 'salad-4.jpg'],
        location: ['loc-1.jpg', 'loc-2.jpg', 'loc-3.jpg', 'loc-4.jpg']
    }
    return pictures;
};

makeGallery = (categories) => {
    let categoriesText = ['Скара', 'Салати', 'Локација']
    let galleryContainer = $('<div>').attr('class', 'flex gallery-container');
    let galleryCategoryWrapper = $('<ul>').attr('class', 'flex gallery-category-wrapper');

    categories.forEach((elem, index) => {
        let item = $('<li>').attr('class', 'category-btn' + index).text(categoriesText[index]);
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

let counter = -1;
let catCounter =0;
gallerySlideShow=()=>{
    let allPictures = getPictures();
    let pictureCategories = Object.keys(allPictures);

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

    console.log(allPictures[pictureCategories[catCounter]][counter])


}

createGalleryContainer = () => {
    let allPictures = getPictures();
    let pictureCategories = Object.keys(allPictures);
    let pictures = [[],[],[]]
    pictureCategories.forEach((elem,index) => {
        pictures[index].push(allPictures[elem])
    });
    let gallery = makeGallery(pictureCategories);
    $('.main-container').append(gallery);

 

$('.gallery-btn').click(event=>{
    let elemCss = $(event.target).attr('class').split('-');
    elemCss = elemCss[elemCss.length-1]
    elemCss=='right'?counter+=1:counter-=1;
    gallerySlideShow()
})


setInterval(()=>{
    counter+=1
    gallerySlideShow()
},5000);

}



