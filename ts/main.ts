class Breed{
    /**
     * The breed's identity string
     */
    id:string;

    /** 
     * The breed's name
     */
    name:string;

    /** 
     * The country abbreviation. It seems if there is no country code
     * it is left out of the response
     */
    country_code:string;

    bred_for:string;

    /**
     * The breed's average life span (in years).
     * May have a range ex. "10 - 13 years" or there may just be one year ex. "11 years"
     */
    life_span:string;

    /**
     * Comma separated list of the breed's general personality traits
     */
    temperament:string;

    /**
     * The breed's country of origin, can be multiple countries
     * The countries are comma separated ex. "Germany, France"
     * If there are no countries present this will be an empty string
     */
    origin:string;

    reference_image_id:string;

    weight:BreedWeight;

    height:BreedHeight;

    /** Object containing data about the breed image */
    image:BreedImage;
}

class BreedWeight{
    imperial: string;
    metric: string;
}

class BreedHeight{
    imperial: string;
    metric: string;
}

class BreedImage {
    id:string;
    width:number;
    height:number;
    url:string;
}

/**
 * Shortened form of the document.getElementById method
 * @param elementID The element's id
 * @returns The corresponding HTML Element
 */
function getByID(elementID: string):HTMLElement {
    return document.getElementById(elementID);
}

/**
 * Gets an HTML Input Element by it's ID
 * @param inputId The input's id
 * @returns The corresponding HTML Input Element
 */
function getInputByID(inputID: string):HTMLInputElement {
    return <HTMLInputElement> getByID(inputID);
}

/**
 * Gets an HTML Input Element's value by the element's ID
 * @param inputID The input's id
 * @returns The Input element's value string
 */
function getInputValueByID(inputID: string):string {
    return (<HTMLInputElement> getByID(inputID)).value;
}

/**
 * Set up the "Get All Breeds" button's onclick event on page load
 */
window.onload = function(){
    // Get the button by it's ID
    let getAllBreedsButton = getByID("get-all-breeds");

    // Setup it's onclick
    getAllBreedsButton.onclick = getAllBreeds;
}

/**
 * When the "Get All Breeds" button is clicked fetches breeds data from the dog API,
 * and displays it on the page
 */
function getAllBreeds(){
    // Limit is the size of the page, page is the index that we are currently on
    fetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0')
    .then((response) => response.json())
    // Add datatype to "data" for the json response
    // to get intellisense
    .then((data:Array<Breed>) => {
        console.log(data);

        // Run through the api data
        for (let currIndex = 0; currIndex < data.length; currIndex++) {
            // Get the current breed
            const currBreed = data[currIndex];
            
            // Setup breed display div
            let breedDisplay = `
            <div class="col">
                <div class="card">
                    <img src="${currBreed.image.url}" class="card-img-top" alt="Image of ${currBreed.name}">
                    <div class="card-body">
                        <h5 class="card-title">${currBreed.name}</h5>
                        <p class="card-text">Often bred for: ${currBreed.bred_for}</p>
                    </div>
                </div>
            </div>`

            // Create a div to contain the breed display
            let breedDisplayDiv = document.getElementById("breed-display");
            
            // Display the div on the page
            breedDisplayDiv.innerHTML += breedDisplay;

            /* // DOM Manipulation method
            // <div class="card"></div>
            let cardDiv:HTMLDivElement = document.createElement("div");
            cardDiv.classList.add("card");

            // <p>Breed name here</p>
            let breedParagraph:HTMLParagraphElement = document.createElement("p");
            breedParagraph.innerText = currBreed.name;

            // <div><p>Breed name here</p></div>
            cardDiv.appendChild(breedParagraph);

            // Add entire div with child elements to web page
            let breedDisplayDiv = document.getElementById("breed-display");
            breedDisplayDiv.appendChild(cardDiv);
            */
        }
    }
    );
}
/*
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
          */