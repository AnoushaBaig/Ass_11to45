var magician = ["alice", "david", "chris"];
function show_magician(magician) {
    magician.forEach(function (magicians) {
        console.log(magicians);
    });
}
function make_greet(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + " the Great";
    }
}
make_greet(magician);
show_magician(magician);
