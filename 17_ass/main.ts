let guestlist :string []=["Maheen","Sundas","Hunzaa","Basit"]
console.log("Unfortunately! dining table won't arrive so we invited only two person");


guestlist.unshift("Areeb","Urwaa")
console.log("Updating list",guestlist);

while (guestlist.length >= 2) {
    let removeguest :string |undefined = guestlist.pop();
    if(removeguest !== undefined){
        console.log(`sorry ${removeguest} Your are noy invited a dinner`);
        
    }
    
}

guestlist.forEach(gust => {
    console.log(`Dear ${gust} You are still invited`);
    
    
});
guestlist.splice(0,  guestlist.length)

console.log("update list of guest:", guestlist);






