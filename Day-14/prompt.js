const userName = prompt("Please Enter Your Name :")
if (userName !== null && userName.trim() !== ""){
    alert(`Hello ${userName}`);
}else{
    alert("You didn't enter a valid Name!")
}