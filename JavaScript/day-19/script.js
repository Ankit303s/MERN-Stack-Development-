const doSomthing = (x) => {
    console.log("Fuction is Start......")

    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        x("Error: It Did not Go Well", skills);
    }, 3000);
    console.log("Fuction is End.....")
};

const callback = (err, result) => {
    if (err) {return console.log(err);}
    return console.log(result);
};
doSomthing(callback);

//promise

const dopromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const skills = [];
        if (skills.length > 0 ) {
            resolve(skills);
        }else{
            reject("something wrong has happend");
        }
        
    }, 2000);
});
dopromise
.then((result) => {
    console.log(result);
})
.catch((error) => console.log(error));

//country name
//country flag 
//pincode
//currency