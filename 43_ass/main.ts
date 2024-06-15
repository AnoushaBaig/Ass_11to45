let magicians :string[]=["Alice","David","Chris"]

function make_greet(magicians:string[]): string[] {
    let greatMagician  :string[] =[];
    magicians.forEach((magicians) => {
        greatMagician.push(`${magicians} The Great`)
        
    });

return greatMagician
}
function showMagician(magicians : string[]) {
    magicians.forEach(magicians =>{
        console.log(magicians);
        
    })
}
let greatMagician = make_greet (magicians.slice())
console.log("Original Magician");
showMagician (magicians)
console.log("Great Magician");
showMagician (greatMagician)
