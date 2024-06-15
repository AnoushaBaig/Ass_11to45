let magician : string []=["alice","david","chris"]

function show_magician(magician:string[]) {
         magician.forEach(magicians => {
            console.log(magicians);
            
        
    });
    
}
function make_greet(magician : string[]) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + " the Great"
        
    }
    
}

make_greet(magician)
show_magician(magician)