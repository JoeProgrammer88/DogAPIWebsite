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
    .then((data) => console.log(data));
}