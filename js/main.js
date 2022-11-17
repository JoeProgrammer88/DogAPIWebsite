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
            var breedDisplay = "\n            <div class=\"col\">\n                <div class=\"card\">\n                    <img src=\"".concat(currBreed.image.url, "\" class=\"card-img-top\" alt=\"Image of ").concat(currBreed.name, "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(currBreed.name, "</h5>\n                        <p class=\"card-text\">Other info coming soon...</p>\n                    </div>\n                </div>\n            </div>");
            var breedDisplayDiv = document.getElementById("breed-display");
            breedDisplayDiv.innerHTML += breedDisplay;
        }
    });
}
