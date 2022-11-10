var Breed = (function () {
    function Breed() {
    }
    return Breed;
}());
var BreedWeight = (function () {
    function BreedWeight() {
    }
    return BreedWeight;
}());
var BreedHeight = (function () {
    function BreedHeight() {
    }
    return BreedHeight;
}());
var BreedImage = (function () {
    function BreedImage() {
    }
    return BreedImage;
}());
function getByID(id) {
    return document.getElementById(id);
}
function getInputByID(id) {
    return getByID(id);
}
function getInputValueByID(id) {
    return getByID(id).value;
}
window.onload = function () {
    var getAllBreedsButton = getByID("get-all-breeds");
    getAllBreedsButton.onclick = getAllBreeds;
};
function getAllBreeds() {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        for (var currIndex = 0; currIndex < data.length; currIndex++) {
            var currBreed = data[currIndex];
            var breedDisplay = "";
            breedDisplay += "".concat(currBreed.name, " ").concat(currBreed.image.url);
            console.log(breedDisplay);
        }
    });
}
