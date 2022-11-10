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
            let breedDisplay:string = "";
            breedDisplay += `${currBreed.name} ${currBreed.image.url}`;
            console.log(breedDisplay);
        }
    }
    );
}