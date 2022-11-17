class Breed{
    id:string;
    name:string;
    country_code:string;
    bred_for:string;
    life_span:string;
    temperament:string;
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

function getByID(id: string) {
    return document.getElementById(id);
}

function getInputByID(id: string) {
    return <HTMLInputElement>getByID(id);
}

function getInputValueByID(id: string) {
    return (<HTMLInputElement>getByID(id)).value;
}

window.onload = function(){
    let getAllBreedsButton = getByID("get-all-breeds");
    getAllBreedsButton.onclick = getAllBreeds;
}
/**
 * Fetches breeds data from API. Then logs it into 
 * the console.
 */
function getAllBreeds(){
    fetch('https://api.thedogapi.com/v1/breeds')
    .then((response) => response.json())
    // Add datatype to "data" for the json response
    // to get intellisense
    .then((data:Array<Breed>) => {
        // console.log(data);
        for (let currIndex = 0; currIndex < data.length; currIndex++) {
            const currBreed = data[currIndex];
            
            let breedDisplay = `
            <div class="col">
                <div class="card">
                    <img src="${currBreed.image.url}" class="card-img-top" alt="Image of ${currBreed.name}">
                    <div class="card-body">
                        <h5 class="card-title">${currBreed.name}</h5>
                        <p class="card-text">Other info coming soon...</p>
                    </div>
                </div>
            </div>`

            // Add entire div with child elements to web page
            let breedDisplayDiv = document.getElementById("breed-display");
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