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
        .then(function (data) { return console.log(data); });
}
