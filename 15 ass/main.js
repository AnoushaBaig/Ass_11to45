var guestlist = ["Anousha", "Hasnain", "Affan"];
// print the who cant make dinner
var unabletoattend = guestlist.splice(1, 1)[0];
console.log("".concat(unabletoattend, " cant attend to dinner"));
// push 
guestlist.push("hania");
// console.log(guestlist);
// pop
guestlist.forEach(function (guest) {
    console.log("dear ".concat(guest, " your are cordially invited in a dinner"));
});
