document.querySelector('h1').style.color = 'red'; ///// mettre le h1 en couleur rouge

document.body.style.border = '5px solid green'; ///// ajouter un cadre vert 

// document.body.style.backgroundColor = 'green';

// document.body.style.color ='red';



// let originalWidth = image.width;         /////////////////// Autre manière de savoir la largeur d'un élément
// let originalHeight = image.height;       //////////////////Autre manière de savoir la longueur d'un élément

//agrandir l'image 

let images = document.querySelectorAll('img');

images.forEach(image => {

    let originalWidth = image.offsetWidth;
    let originalHeight = image.offsetHeight;

    image.addEventListener('mouseover', function () {
        this.style.width = originalWidth * 3.5 + 'px';
        this.style.height = originalHeight * 3.5 + 'px';
    });

    image.addEventListener('mouseout', function () {
        this.style.width = originalWidth + 'px';
        this.style.height = originalHeight + 'px';
    });

});



