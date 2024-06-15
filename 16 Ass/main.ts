let guestlist :string [] =["Anousha","Affan","Maheen"]
console.log("Great news ! we found a bigger table");

// add something in array begining 

// unshift

guestlist.unshift("hania")
console.log(guestlist);

// splice
guestlist.splice(Math.floor(guestlist.length/2),0,"Huda Imtiaz");

// Push
guestlist.push("Iqraa");
console.log(guestlist);

guestlist.forEach(guest => {
    console.log(`dear ${guest} you all are cordially invited a dinner`);
    
});