const school = {
  1: {
    name:"Ahmet",
    age:10,
    city:"Eskisehir",
    average:80
  },
  
  2: {
    name:"Mert",
    age:16,
    city:"Edirne",
    average:84
  },
  3: {
    name:"Sila",
    age:20,
    city:"Ordu",
    average:75
  },
  4: {
    name:"Turgut",
    age:9,
    city:"Van",
    average:80
  },
  5: {
    name:"Macit",
    age:40,
    city:"Erzurum",
    average:95
  }
}

 function welcome() {
  for (key in school){
    console.log(school[key].name + " " + school[key].city + " " + school[key].age);
    };
 document.querySelector('body').style.backgroundColor = 'green';
  };
  
  
