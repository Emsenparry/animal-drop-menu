const myGallery = document.getElementById('app');
const mySelect = document.getElementById('animals');


mySelect.addEventListener("change", animalselected);



function animalselected() {

    console.log(mySelect.value);

    switch (mySelect.value) {
        case "tiger":
            buildAnimalCard("Tiger", "https://knuthenborg.dk/wp-content/uploads/2021/05/hi-igtv-keni-thumb-e1620816735137.png", "Super flot Tiger");
            break;

        case "koala":
            buildAnimalCard("Koala", "https://asset.dr.dk/imagescaler/?protocol=https&server=www.dr.dk&file=%2Fimages%2Fcrop%2F2021%2F10%2F19%2F1634629513_kerin-gedge-p3sej29shd8-unsplash.jpg&scaleAfter=crop&quality=70&w=720&h=405", "En cute lille koala");
            break;

        case "ferret":
            buildAnimalCard("Fritte", "https://www.byens-dyreklinik.dk/wp-content/uploads/2013/06/kastration-sterilisation-af-ilder.jpg", "En sød fritte!!!");
            break;

        case "spider":
            buildAnimalCard("Edderkop", "https://videnskab.dk/files/article_media/spider.jpg", "Kill it.");
            break;

        default:
            alert("No such animal");
    }
}

// function buildAnimalCard(testvalue){

//     console.log("Her er et fint dyr");
//     console.log(testvalue);
// }

function buildAnimalCard(myHeadlineText, myUrl, myDescription) {
    // Clear gallery HTML
    myGallery.innerHTML = "";


    // Create needed elements for card
    const myCard = document.createElement("figure");
    const myHeadline = document.createElement("h2");
    const cardImage = document.createElement("img");
    const cardDescription = document.createElement("p");


    // Assign elements corrosponding values
    myHeadline.innerText = myHeadlineText;
    cardImage.src = myUrl;
    cardDescription.innerText = myDescription;


    myCard.appendChild(myHeadline);
    myCard.appendChild(cardImage);
    myCard.appendChild(cardDescription);


    // Append card
    myGallery.appendChild(myCard);

}



