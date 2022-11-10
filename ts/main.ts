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

function getAllBreeds(){
    
}