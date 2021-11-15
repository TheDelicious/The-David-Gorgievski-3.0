const imgSourceArray = ['./social life/slika1.jpg', './social life/slika2.jpg', './social life/slika3.jpg', './social life/slika4.jpg']

const galleryImg = document.getElementById('galleryImg')

const arrowLeft = document.getElementById("arrowLeft")
const arrowRight = document.getElementById("arrowRight")


const dotPraga = document.getElementById('dotPraga')
const dotVenecija = document.getElementById('dotVenecija')
const dotCupino = document.getElementById('dotCupino');


function arrowLeftClicked() {
    const curentSource = galleryImg.getAttribute('src')

    let index = imgSourceArray.indexOf(curentSource)

    index--;

    if (index < 0) index = imgSourceArray.length - 1

    //--------------------------------

    if (index === 0) {
        dotSlika1.style.backgroundColor = "#a31a1a";
        dotSlika1.style.borderRadius = "50%";
        dotSlika2.style.backgroundColor = "transparent";
        dotSlika3.style.backgroundColor = "transparent";
        dotSlika4.style.backgroundColor = "transparent";
    }
    else if (index === 1) {
        dotSlika2.style.backgroundColor = "#a31a1a";
        dotSlika2.style.borderRadius = "50%";
        dotSlika1.style.backgroundColor = "transparent";
        dotSlika3.style.backgroundColor = "transparent";
        dotSlika4.style.backgroundColor = "transparent";
    }
    else if (index === 2) {
        dotSlika3.style.backgroundColor = "#a31a1a";
        dotSlika3.style.borderRadius = "50%";
        dotSlika1.style.backgroundColor = "transparent";
        dotSlika2.style.backgroundColor = "transparent";
        dotSlika4.style.backgroundColor = "transparent";
    }
    else if (index === 3) {
        dotSlika4.style.backgroundColor = "#a31a1a";
        dotSlika4.style.borderRadius = "50%";
        dotSlika1.style.backgroundColor = "transparent";
        dotSlika2.style.backgroundColor = "transparent";
        dotSlika3.style.backgroundColor = "transparent";
    }

    //--------------------------------

    const nextSource = imgSourceArray[index]

    galleryImg.setAttribute('src', nextSource)
}

arrowLeft.addEventListener('click', arrowLeftClicked)


arrowRight.addEventListener('click', function () {
    const curentSource = galleryImg.getAttribute('src')

    let index = imgSourceArray.indexOf(curentSource)

    index++

    if (index >= imgSourceArray.length) index = 0

    //--------------------------------

    if (index === 0) {
        dotSlika1.style.backgroundColor = "#a31a1a";
        dotSlika1.style.borderRadius = "50%";
        dotSlika2.style.backgroundColor = "transparent";
        dotSlika3.style.backgroundColor = "transparent";
        dotSlika4.style.backgroundColor = "transparent";
    }
    else if (index === 1) {
        dotSlika2.style.backgroundColor = "#a31a1a";
        dotSlika2.style.borderRadius = "50%";
        dotSlika1.style.backgroundColor = "transparent";
        dotSlika3.style.backgroundColor = "transparent";
        dotSlika4.style.backgroundColor = "transparent";
    }
    else if (index === 2) {
        dotSlika3.style.backgroundColor = "#a31a1a";
        dotSlika3.style.borderRadius = "50%";
        dotSlika1.style.backgroundColor = "transparent";
        dotSlika2.style.backgroundColor = "transparent";
        dotSlika4.style.backgroundColor = "transparent";
    }
    else if (index === 3) {
        dotSlika4.style.backgroundColor = "#a31a1a";
        dotSlika4.style.borderRadius = "50%";
        dotSlika1.style.backgroundColor = "transparent";
        dotSlika2.style.backgroundColor = "transparent";
        dotSlika3.style.backgroundColor = "transparent";
    }

    //--------------------------------

    const nextSource = imgSourceArray[index]

    galleryImg.setAttribute('src', nextSource)

})


const imgTravelArray = ['./travel/praga.jpg', './travel/venecija.jpg', './travel/cupino.jpg']

const Travelimg = document.getElementById('TravelImg')

const arrowLeftT = document.getElementById('arrowLeftT')
const arrowRightT = document.getElementById('arrowRightT')

function arrowLeftClickedT(){
    const curentSource = Travelimg.getAttribute('src')

    let index = imgTravelArray.indexOf(curentSource)

    index--

    if(index<0) index = imgTravelArray.length-1

    //--------------------------------

    if(index ==0){
        dotPraga.style.backgroundColor = "#a31a1a";
        dotPraga.style.borderRadius = "50%"
        dotVenecija.style.backgroundColor = "transparent";
        dotCupino.style.backgroundColor = "transparent";
    }
    else if(index == 1)
    {
        dotVenecija.style.backgroundColor = "#a31a1a";
        dotVenecija.style.borderRadius = "50%"
        dotPraga.style.backgroundColor = "transparent";
        dotCupino.style.backgroundColor = "transparent";
    }
    else if(index == 2)
    {
        dotCupino.style.backgroundColor = "#a31a1a";
        dotCupino.style.borderRadius = "50%"
        dotVenecija.style.backgroundColor = "transparent";
        dotPraga.style.backgroundColor = "transparent";
    }


    //--------------------------------

    const nextSource = imgTravelArray[index]

    Travelimg.setAttribute('src', nextSource)
}

arrowLeftT.addEventListener('click', arrowLeftClickedT)

function arrowRightClickedT(){
    const curentSource = Travelimg.getAttribute('src')

    let index = imgTravelArray.indexOf(curentSource)

    index++

    if(index>=imgTravelArray.length) index=0
    
    const nextSource= imgTravelArray[index]

    //--------------------------------

    if (index === 0) {
        dotPraga.style.backgroundColor = "#a31a1a";
        dotPraga.style.borderRadius = "50%";
        dotVenecija.style.backgroundColor = "transparent";
        dotCupino.style.backgroundColor = "transparent";
    }
    else if (index === 1) {
        dotVenecija.style.backgroundColor = "#a31a1a";
        dotVenecija.style.borderRadius = "50%";
        dotPraga.style.backgroundColor = "transparent";
        dotCupino.style.backgroundColor = "transparent";
    }
    else if (index === 2) {
        dotCupino.style.backgroundColor = "#a31a1a";
        dotCupino.style.borderRadius = "50%";
        dotVenecija.style.backgroundColor = "transparent";
        dotPraga.style.backgroundColor = "transparent";
    }


    //--------------------------------

    Travelimg.setAttribute('src', nextSource)
}

arrowRightT.addEventListener('click', arrowRightClickedT)


// Dots Travel -----------------------------------------------------------------------------------------------------------------------


dotPraga.addEventListener('click', dotPragaClicked)

function dotPragaClicked(){
    
    const index = 0;

    const dotSource = imgTravelArray[index];

    dotPraga.style.backgroundColor = "#a31a1a";
    dotPraga.style.borderRadius = "50%"
    dotVenecija.style.backgroundColor = "transparent";
    dotCupino.style.backgroundColor = "transparent";

    Travelimg.setAttribute('src', dotSource);
}



dotVenecija.addEventListener('click', dotVenecijaClicked)

function dotVenecijaClicked(){
    
    const index = 1;

    const dotSource = imgTravelArray[index];

    dotVenecija.style.backgroundColor = "#a31a1a";
    dotVenecija.style.borderRadius = "50%"
    dotPraga.style.backgroundColor = "transparent";
    dotCupino.style.backgroundColor = "transparent";

    Travelimg.setAttribute('src', dotSource)
}


dotCupino.addEventListener('click', dotCupinoClicked);

function dotCupinoClicked(){

    const index = 2;

    const dotSource = imgTravelArray[index];

    dotCupino.style.backgroundColor = "#a31a1a";
    dotCupino.style.borderRadius = "50%"
    dotVenecija.style.backgroundColor = "transparent";
    dotPraga.style.backgroundColor = "transparent";

    Travelimg.setAttribute('src', dotSource);
}

// Dots Social Life ---------------------------------------------------------------------------------------------------------------

const dotSlika1 = document.getElementById('dotSlika1');

dotSlika1.addEventListener('click', dotSlika1Clicked)

function dotSlika1Clicked(){

    const index = 0;
    
    const dotSource = imgSourceArray[index];

    dotSlika1.style.backgroundColor = "#a31a1a";
    dotSlika1.style.borderRadius = "50%";
    dotSlika2.style.backgroundColor = "transparent";
    dotSlika3.style.backgroundColor = "transparent";
    dotSlika4.style.backgroundColor = "transparent";

    galleryImg.setAttribute('src', dotSource);
}

const dotSlika2 = document.getElementById('dotSlika2');

dotSlika2.addEventListener('click', function dotSlika2Clicked(){

    const index = 1;

    const dotSource = imgSourceArray[index];

    dotSlika2.style.backgroundColor = "#a31a1a";
    dotSlika2.style.borderRadius = "50%";
    dotSlika1.style.backgroundColor = "transparent";
    dotSlika3.style.backgroundColor = "transparent";
    dotSlika4.style.backgroundColor = "transparent";

    galleryImg.setAttribute('src', dotSource)
})

const dotSlika3 = document.getElementById('dotSlika3')

dotSlika3.addEventListener('click', dotslika3Clicked);

function dotslika3Clicked(){
    
    const index = 2;

    const dotSource = imgSourceArray[index];

    dotSlika3.style.backgroundColor = "#a31a1a";
    dotSlika3.style.borderRadius = "50%";
    dotSlika1.style.backgroundColor = "transparent";
    dotSlika2.style.backgroundColor = "transparent";
    dotSlika4.style.backgroundColor = "transparent";

    galleryImg.setAttribute('src', dotSource)
}

const dotSlika4 = document.getElementById('dotSlika4')

dotSlika4.addEventListener('click', dotSlika4Clicked);

function dotSlika4Clicked(){

    const index = 3;

    const dotSource = imgSourceArray[index];

    dotSlika4.style.backgroundColor = "#a31a1a";
    dotSlika4.style.borderRadius = "50%";
    dotSlika1.style.backgroundColor = "transparent";
    dotSlika2.style.backgroundColor = "transparent";
    dotSlika3.style.backgroundColor = "transparent";

    galleryImg.setAttribute('src', dotSource);
}

// The End ------------------------------------------------------------------------------------------------------------------------

var TheEndA = new Audio('./Sounds/Yea.mp3');

const TheEndP = document.getElementById('TheEndP');

TheEndP.addEventListener('mouseover', TheEndPMouseOver);

function TheEndPMouseOver(){

    TheEndA.play();
}

TheEndP.addEventListener('mouseleave', TheEndPMouseLeave);

function TheEndPMouseLeave() {

    TheEndA.pause();
}

// Intro Phone------------------------------------------------------------------------------------------------------------------------------------

const imgIntroArray = ['./Sliki/Industriska2.jpg', './Sliki/Pica2.jpg', './Sliki/Sandanski2.jpg', './Sliki/Kamnik2.jpg'];

const imgIntro = document.getElementById('IntroPhone')

const BackArrowIntro = document.getElementById('BackArrowIntro');

const NextArrowIntro = document.getElementById('NextArrowIntro');

const dotIntro1 = document.getElementById("dotIntro1");

const dotIntro2 = document.getElementById('dotIntro2');

const dotIntro3 = document.getElementById("dotIntro3");

const dotIntro4 = document.getElementById('dotIntro4');


BackArrowIntro.addEventListener('click', BackArrowIntroClicked);

function BackArrowIntroClicked(){

    const curentSource = imgIntro.getAttribute('src');

    let index = imgIntroArray.indexOf(curentSource);

    index--;

    if(index < 0) index = imgIntroArray.length - 1;

    //--------------------------------

    if (index === 0) {
        dotIntro1.style.backgroundColor = "#a31a1a";
        dotIntro1.style.borderRadius = "50%";
        dotIntro2.style.backgroundColor = "transparent";
        dotIntro3.style.backgroundColor = "transparent";
        dotIntro4.style.backgroundColor = "transparent";
    }
    else if (index === 1) {
        dotIntro2.style.backgroundColor = "#a31a1a";
        dotIntro2.style.borderRadius = "50%";
        dotIntro1.style.backgroundColor = "transparent";
        dotIntro3.style.backgroundColor = "transparent";
        dotIntro4.style.backgroundColor = "transparent";
    }
    else if (index === 2) {
        dotIntro3.style.backgroundColor = "#a31a1a";
        dotIntro3.style.borderRadius = "50%";
        dotIntro1.style.backgroundColor = "transparent";
        dotIntro2.style.backgroundColor = "transparent";
        dotIntro4.style.backgroundColor = "transparent";
    }
    else if (index === 3) {
        dotIntro4.style.backgroundColor = "#a31a1a";
        dotIntro4.style.borderRadius = "50%";
        dotIntro1.style.backgroundColor = "transparent";
        dotIntro2.style.backgroundColor = "transparent";
        dotIntro3.style.backgroundColor = "transparent";
    }

    //--------------------------------


    const nextSource = imgIntroArray[index];

    imgIntro.setAttribute('src', nextSource);
}

NextArrowIntro.addEventListener('click', NextArrowIntroClicked);

function NextArrowIntroClicked(){

    const curentSource = imgIntro.getAttribute('src');

    let index = imgIntroArray.indexOf(curentSource);

    index++;

    if( index >= (imgIntroArray.length)) index = 0;

    //--------------------------------

    if (index === 0) {
        dotIntro1.style.backgroundColor = "#a31a1a";
        dotIntro1.style.borderRadius = "50%";
        dotIntro2.style.backgroundColor = "transparent";
        dotIntro3.style.backgroundColor = "transparent";
        dotIntro4.style.backgroundColor = "transparent";
    }
    else if (index === 1) {
        dotIntro2.style.backgroundColor = "#a31a1a";
        dotIntro2.style.borderRadius = "50%";
        dotIntro1.style.backgroundColor = "transparent";
        dotIntro3.style.backgroundColor = "transparent";
        dotIntro4.style.backgroundColor = "transparent";
    }
    else if (index === 2) {
        dotIntro3.style.backgroundColor = "#a31a1a";
        dotIntro3.style.borderRadius = "50%";
        dotIntro1.style.backgroundColor = "transparent";
        dotIntro2.style.backgroundColor = "transparent";
        dotIntro4.style.backgroundColor = "transparent";
    }
    else if (index === 3) {
        dotIntro4.style.backgroundColor = "#a31a1a";
        dotIntro4.style.borderRadius = "50%";
        dotIntro1.style.backgroundColor = "transparent";
        dotIntro2.style.backgroundColor = "transparent";
        dotIntro3.style.backgroundColor = "transparent";
    }

    //--------------------------------
    

    const nextSource = imgIntroArray[index];

    imgIntro.setAttribute('src', nextSource);
}

// IntroPhone Dots -----------------------------------------------------------------------------------------------------------

// dotIntro1.addEventListener("click", dotIntro1Clicked);

// function dotIntro1Clicked(){

//     imgIntro.setAttribute('src', imgIntroArray[0]);

//     dotIntro1.style.backgroundColor = "#a31a1a";
//     dotIntro1.style.borderRadius = "50%";
//     dotIntro2.style.backgroundColor = "transparent";
//     dotIntro3.style.backgroundColor = "transparent";
//     dotIntro4.style.backgroundColor = "transparent";
// }

// dotIntro2.addEventListener("click", dotIntro2Clicked);

// function dotIntro2Clicked() {

//     imgIntro.setAttribute('src', imgIntroArray[1]);

//     dotIntro2.style.backgroundColor = "#a31a1a";
//     dotIntro2.style.borderRadius = "50%";
//     dotIntro1.style.backgroundColor = "transparent";
//     dotIntro3.style.backgroundColor = "transparent";
//     dotIntro4.style.backgroundColor = "transparent";
// }

// dotIntro3.addEventListener("click", dotIntro3Clicked);

// function dotIntro3Clicked() {

//     imgIntro.setAttribute('src', imgIntroArray[2]);

//     dotIntro3.style.backgroundColor = "#a31a1a";
//     dotIntro3.style.borderRadius = "50%";
//     dotIntro1.style.backgroundColor = "transparent";
//     dotIntro2.style.backgroundColor = "transparent";
//     dotIntro4.style.backgroundColor = "transparent";
// }

// dotIntro4.addEventListener("click", dotIntro4Clicked);

// function dotIntro4Clicked() {

//     imgIntro.setAttribute('src', imgIntroArray[3]);

//     dotIntro4.style.backgroundColor = "#a31a1a";
//     dotIntro4.style.borderRadius = "50%";
//     dotIntro1.style.backgroundColor = "transparent";
//     dotIntro2.style.backgroundColor = "transparent";
//     dotIntro3.style.backgroundColor = "transparent";
// }

//Travel Phone ---------------------------------------------------------------------------------------------------------------------------------------

const TravelPhone = document.getElementById('TravelPhone');

const BackArrowTravel = document.getElementById('BackArrowTravel');

const NextArrowTravel = document.getElementById("NextArrowTravel");

const dotTravelPhone1 = document.getElementById('dotTravelPhone1');

const dotTravelPhone2 = document.getElementById('dotTravelPhone2');

const dotTravelPhone3 = document.getElementById('dotTravelPhone3');


BackArrowTravel.addEventListener('click', BackArrowTravelClicked);

function BackArrowTravelClicked(){
    const curentSource = TravelPhone.getAttribute('src');

    let index = imgTravelArray.indexOf(curentSource);

    index--

    if (index < 0) index = imgTravelArray.length - 1;

    //--------------------------------

    if (index == 0) {
        dotTravelPhone1.style.backgroundColor = "#a31a1a";
        dotTravelPhone1.style.borderRadius = "50%"
        dotTravelPhone2.style.backgroundColor = "transparent";
        dotTravelPhone3.style.backgroundColor = "transparent";
    }
    else if (index == 1) {
        dotTravelPhone2.style.backgroundColor = "#a31a1a";
        dotTravelPhone2.style.borderRadius = "50%"
        dotTravelPhone1.style.backgroundColor = "transparent";
        dotTravelPhone3.style.backgroundColor = "transparent";
    }
    else if (index == 2) {
        dotTravelPhone3.style.backgroundColor = "#a31a1a";
        dotTravelPhone3.style.borderRadius = "50%"
        dotTravelPhone2.style.backgroundColor = "transparent";
        dotTravelPhone1.style.backgroundColor = "transparent";
    }


    //--------------------------------

    const nextSource = imgTravelArray[index]

    TravelPhone.setAttribute('src', nextSource)

    console.log();
}

NextArrowTravel.addEventListener('click', NextArrowTravelClicked);

function NextArrowTravelClicked(){
    const curentSource = TravelPhone.getAttribute('src')

    let index = imgTravelArray.indexOf(curentSource)

    index++;

    if (index === imgTravelArray.length )index = 0

    const nextSource = imgTravelArray[index]

    //--------------------------------

    if (index == 0) {
        dotTravelPhone1.style.backgroundColor = "#a31a1a";
        dotTravelPhone1.style.borderRadius = "50%"
        dotTravelPhone2.style.backgroundColor = "transparent";
        dotTravelPhone3.style.backgroundColor = "transparent";
    }
    else if (index == 1) {
        dotTravelPhone2.style.backgroundColor = "#a31a1a";
        dotTravelPhone2.style.borderRadius = "50%"
        dotTravelPhone1.style.backgroundColor = "transparent";
        dotTravelPhone3.style.backgroundColor = "transparent";
    }
    else if (index == 2) {
        dotTravelPhone3.style.backgroundColor = "#a31a1a";
        dotTravelPhone3.style.borderRadius = "50%"
        dotTravelPhone2.style.backgroundColor = "transparent";
        dotTravelPhone1.style.backgroundColor = "transparent";
    }

    //--------------------------------

    TravelPhone.setAttribute('src', nextSource);
}

//Social Life Phone -------------------------------------------------------------------------------------------------------------------------

const SocialLifePhone = document.getElementById('SocialLifePhone');

const BackArrowSocialLife = document.getElementById('BackArrowSocialLife');

const NextArrowSocialLife = document.getElementById("NextArrowSocialLife");

const dotSocialLifePhone1 = document.getElementById('dotSocialLifePhone1');

const dotSocialLifePhone2 = document.getElementById('dotSocialLifePhone2');

const dotSocialLifePhone3 = document.getElementById('dotSocialLifePhone3');


BackArrowSocialLife.addEventListener('click', BackArrowSocialLifeClicked);

function BackArrowSocialLifeClicked() {
    const curentSource = SocialLifePhone.getAttribute('src');

    let index = imgSourceArray.indexOf(curentSource);

    index--

    if (index < 0) index = imgSourceArray.length - 1;

    //--------------------------------

    if (index == 0) {
        dotSocialLifePhone1.style.backgroundColor = "#a31a1a";
        dotSocialLifePhone1.style.borderRadius = "50%"
        dotSocialLifePhone2.style.backgroundColor = "transparent";
        dotSocialLifePhone3.style.backgroundColor = "transparent";
        dotSocialLifePhone4.style.backgroundColor = "transparent";

    }
    else if (index == 1) {
        dotSocialLifePhone2.style.backgroundColor = "#a31a1a";
        dotSocialLifePhone2.style.borderRadius = "50%"
        dotSocialLifePhone1.style.backgroundColor = "transparent";
        dotSocialLifePhone3.style.backgroundColor = "transparent";
        dotSocialLifePhone4.style.backgroundColor = "transparent";

    }
    else if (index == 2) {
        dotSocialLifePhone3.style.backgroundColor = "#a31a1a";
        dotSocialLifePhone3.style.borderRadius = "50%"
        dotSocialLifePhone2.style.backgroundColor = "transparent";
        dotSocialLifePhone1.style.backgroundColor = "transparent";
        dotSocialLifePhone4.style.backgroundColor = "transparent";
    }
    else if (index == 3) {
        dotSocialLifePhone4.style.backgroundColor = "#a31a1a";
        dotSocialLifePhone4.style.borderRadius = "50%"
        dotSocialLifePhone2.style.backgroundColor = "transparent";
        dotSocialLifePhone1.style.backgroundColor = "transparent";
        dotSocialLifePhone3.style.backgroundColor = "transparent";
    }



    //--------------------------------

    const nextSource = imgSourceArray[index]

    SocialLifePhone.setAttribute('src', nextSource)

}

NextArrowSocialLife.addEventListener('click', NextArrowSocialLifeClicked);

function NextArrowSocialLifeClicked() {
    const curentSource = SocialLifePhone.getAttribute('src')

    let index = imgSourceArray.indexOf(curentSource)

    index++;

    if (index === imgSourceArray.length) index = 0

    const nextSource = imgSourceArray[index]

    //--------------------------------

    if (index == 0) {
        dotSocialLifePhone1.style.backgroundColor = "#a31a1a";
        dotSocialLifePhone1.style.borderRadius = "50%"
        dotSocialLifePhone2.style.backgroundColor = "transparent";
        dotSocialLifePhone3.style.backgroundColor = "transparent";
        dotSocialLifePhone4.style.backgroundColor = "transparent";

    }
    else if (index == 1) {
        dotSocialLifePhone2.style.backgroundColor = "#a31a1a";
        dotSocialLifePhone2.style.borderRadius = "50%"
        dotSocialLifePhone1.style.backgroundColor = "transparent";
        dotSocialLifePhone3.style.backgroundColor = "transparent";
        dotSocialLifePhone4.style.backgroundColor = "transparent";

    }
    else if (index == 2) {
        dotSocialLifePhone3.style.backgroundColor = "#a31a1a";
        dotSocialLifePhone3.style.borderRadius = "50%"
        dotSocialLifePhone2.style.backgroundColor = "transparent";
        dotSocialLifePhone1.style.backgroundColor = "transparent";
        dotSocialLifePhone4.style.backgroundColor = "transparent";
    }
    else if (index == 3) {
        dotSocialLifePhone4.style.backgroundColor = "#a31a1a";
        dotSocialLifePhone4.style.borderRadius = "50%"
        dotSocialLifePhone2.style.backgroundColor = "transparent";
        dotSocialLifePhone1.style.backgroundColor = "transparent";
        dotSocialLifePhone3.style.backgroundColor = "transparent";
    }

    //--------------------------------

    SocialLifePhone.setAttribute('src', nextSource);
}