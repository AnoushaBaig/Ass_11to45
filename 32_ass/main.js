var current_user = ["Admin", "User1", "User2", "User3"];
var new_user = ["User1", "User4", "User5", "Admin", "User6"];
new_user.forEach(function (newuser) {
    if (current_user.some(function (currentUser) { return currentUser.toLowerCase() === newuser.toLocaleLowerCase(); })) {
        console.log("".concat(newuser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newuser, " is available"));
    }
});
