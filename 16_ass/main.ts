// question 16
let guestlist  : string [] =["Maheen","Sundas","Hunzaa","Basit"]
console.log("Great news! we found a bigger dinning table");

// unshift method
guestlist.unshift("Tehreem")

// splice method
guestlist.splice(Math.floor(guestlist.length/2),0, "Iqra")

// push method
guestlist.push("Farhaj")

guestlist.forEach(guest => {
    console.log(` Dear ${guest} You are invited a Dinner`);
    
    
});