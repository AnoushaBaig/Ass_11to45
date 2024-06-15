let userName :string []=["Admin","user1","user2","user3","user4"]

userName .forEach((userNames) => {
    if(userNames == "Admin"){
        console.log("Hello admin would you like to see a status report.");
        
    }else{
        console.log(`Hello ${userNames} thank you  for loggin in again.`);
        
    }
});