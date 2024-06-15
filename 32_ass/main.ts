let current_user:string[]=["Admin","User1","User2","User3"]
let new_user:string[]=["User1","User4","User5","Admin","User6"]

new_user.forEach((newuser)=>{
    if(current_user.some(
        (currentUser)=> currentUser.toLowerCase() === newuser.toLocaleLowerCase()
    )){
        console.log(`${newuser} will need to enter a new username.`);
        
    }else{
        console.log(`${newuser} is available`);
        
    }
})