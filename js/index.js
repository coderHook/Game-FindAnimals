
let images = [
    {
        name: "A wild bear with his son",
        src: "../images/bear.png"
    },
    {
        name: "A Bird Flying",
        src: "../images/birds.png"
    },
    {
        name: "A Cheetah jumping",
        src: "../images/cheetah.png"
    }
];

let i = 0;

let main = document.querySelector('#searchField');
let foundItems = [];

for(let i = 0; i < images.length; i++){

    let img = `<img src="${images[i].src}" alt="${images[i].name}" 
    style="bottom: ${getRandomInt(0, 30) + "rem"};
            left: ${getRandomInt(0, 60) + "rem"};
            onclick="addToFoundItems(${images[i]})"/>`;

    main.insertAdjacentHTML('beforeend', img);


}

// Adding found items:
console.log(foundItems);

/* ------------------- F U N C T I O N S ---------------------------*/
function getRandomInt(a, b) {
    let first, 
        last;

    if (b < a) { first = b; last = a}
    else {first = a; last = b}
    
    //Calculate the random number in the range.
    return Math.floor(Math.random() * last - 1) + first;
}

function addToFoundItems(image){
    console.log('im here');
    console.log(foundItems.includes(image))
    if(!foundItems.includes(image)) {
        foundItems.push(image)
    }
}