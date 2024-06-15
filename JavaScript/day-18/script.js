class empData {
  emp1 = {
    name: "Rahul",
    empId: 3567,
    mailId: "mailme@gmail.com",
    Address: {
      "City Name": "Vijayawada",
      District: "Krishna district",
      pin: 526894,
    },
    Hobbies: ["Netflix", "Tennis", "Coding"],
  };
  emp2 = {
    name: "Ravi",
    empId: 9867,
    mailId: "ravimail@gmail.com",
    Address: {
      "City Name": "Guntur",
      District: "Prakasham district",
      Pin: 685479,
    },
    Hobbies: ["Reading", "Swimming", "Baking"],
  };
  emp3 = {
    name: "Santosh",
    empId: 8876,
    mailId: "santoshmail@gmail.com",
    Address: {
      "City Name": "Warangal",
      District: "Hanamkonda district",
      Pin: 996587,
    },
    Hobbies: ["Gym", "Reading Novels"],
  };
  emp4 = {
    name: "Surya",
    empId: 3469,
    mailId: "suryamail@gmail.com",
    Address: {
      City: "Nazamabad",
      District: "Nazamabad district",
      Pin: 648597,
    },
    Hobbies: ["Badminton", "E-Sports", "Netflix"],
  };
  emp5 = {
    name: "Kiran",
    empId: 8864,
    mailId: "kirammail@gmail.com",
    Address: {
      city: "Karimnagar",
      district: "Karimnagar district",
      pin: 666954,
    },
    Hobbies: ["Gaming", "Cooking", "Music"],
  };
}

const elements=new empData();
//target the Body or Document
const body = document.querySelector("#body");
//Create Main Box
const mainBox = document.createElement("div");
//Add Css Class
mainBox.className = "mainBox";
//Add this Main box to the div
body.appendChild(mainBox);


Object.keys(elements).map((element, index) =>{
  const empBox = document.createElement("div");
  empBox.className = `emp ${index + 1}`;
  const addBox = document.createElement("div");
  addBox.className='addressBox';

  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const h3Address=document.createElement('h3');

  h2.innerHTML = `Name:${elements[element].name}`;
  h3.innerHTML = `Employee Id:${elements[element].empId}`;
  h3Address.innerHTML='Address:'
  addBox.appendChild(h3Address);

  Object.keys(elements[element].Address).map((addressElement) => {
    const addComponent=document.createElement('p');
    addComponent.innerHTML=`<b>${addressElement}:</b>${elements[element].Address[addressElement]}`;
    addBox.appendChild(addComponent)
  });











 
  empBox.appendChild(h2);
  empBox.appendChild(h3);
  empBox.appendChild(addBox);
  mainBox.appendChild(empBox);
});









//Demo Logic
//console.log(elements)  //root data
//console.log(Object.keys(elements)) // first Break

////Second Break
// //Object.keys(elements).map((element,index)=>{
//   //console.log(index)
//   //console.log(elements)
//   //console.log(elements[element])
//   //console.log(elements[element].name)
//   //console.log(elements[element].Address)
// //});
//third Break
// Object.keys(elements).map((element,index)=>{
//   Object.keys(elements[element].Address).map((address,index)=>{
//     console.log(address);
//   })
// })


