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
}

createGalleryContainer = () => {
    let allPictures = getPictures();
    let pictureCategories = Object.keys(allPictures);
    let pictures = [[],[],[]]
    pictureCategories.forEach((elem,index) => {
        pictures[index].push(allPictures[elem])
    });
console.log(pictures)
    let gallery = makeGallery(pictureCategories);
    $('.main-container').append(gallery);



$('.gallery-btn').click(event=>{
    let elemID = $(event.target).attr('class');
})

    
    pictures.forEach(elem => {
        let counter = 0;
        for (let index = 0; index < elem.length; index++) {
            counter += 1;

        }
    });


}