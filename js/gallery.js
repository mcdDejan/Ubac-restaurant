getPictures=()=>{
    const pictures = {
        bbq:['bbq-1.jpg','bbq-2.jpg','bbq-3.jpg','bbq-4.jpg'],
        salad:['salad-1.jpg','salad-2.jpg','salad-3.jpg','salad-4.jpg'],
        location:['loc-1.jpg','loc-2.jpg','loc-3.jpg','loc-4.jpg']
    }
    return pictures;
};

makeSlideShowGallery=()=>{
let allPictures = getPictures();
let pictureCategories = Object.keys(allPictures);
let pictures=[]
pictureCategories.forEach((elem)=>{
pictures.push(allPictures[elem])
});
pictures.forEach(elem=>{
let counter = 0;
for (let index = 0; index < elem.length; index++) {
    console.log(elem[counter]);
    counter+=1;
    
}
})

}
makeSlideShowGallery()