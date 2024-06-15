let guestlist : string []=["Anousha","Hasnain","Affan"];

// print the who cant make dinner

let unabletoattend :string = guestlist.splice(1,1)[0]
console.log(`${unabletoattend} cant attend to dinner`);


// push 
guestlist.push("hania");
// console.log(guestlist);

// pop
guestlist.forEach(guest => {
    console.log(`dear ${guest} your are cordially invited in a dinner`);
    
})


