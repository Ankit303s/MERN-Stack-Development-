let username = prompt("Enter your name");
document.write("Welcome to our Page ", username);

if (username !== null && username.trim() !==""){
    alert("Hello, ${username}!");
}else{
    alert("You didn't enter a valid name.");
}