var magicians = ["Alice", "David", "Chris"];
function make_greet(magicians) {
    var greatMagician = [];
    magicians.forEach(function (magicians) {
        greatMagician.push("".concat(magicians, " The Great"));
    });
    return greatMagician;
}
function showMagician(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
var greatMagician = make_greet(magicians.slice());
console.log("Original Magician");
showMagician(magicians);
console.log("Great Magician");
showMagician(greatMagician);
