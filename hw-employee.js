const employee = [
  {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      address: {
        city: "Anytown",
        state: "NY",
        postalCode: "12345",
      },
    },
  },
  [
    {
      employmentDetails: {
        position: "Software Engineer",
        department: "Engineering",
        startDate: "2022-01-01",
        endDate: null,
        manager: {
          firstName: "Alice",
          lastName: "Smith",
          email: "alice@example.com",
        },
      },
    },
  ],
];

const input = document.querySelector(".employee__input");
const resultTag = document.querySelector(".employee__result-item");

const handleInput = (evt) => {
  const newEmployee = {...employee[0], ...employee[1][0]};

  const info = [];
  
  const word = evt.target.value;
  
  const setInfo = (value) => {
    if(typeof(value)==="object"){
      info.push("Wartością podanego klucza jest obiekt")
    }
  
    if(typeof(value)!=="object" && value){
      info.push(value)
    }
  };

  if(Object.keys(newEmployee).includes(word)) {
    setInfo(newEmployee[word]);
  }
  if(Object.keys(newEmployee.personalInfo).includes(word)) {
    setInfo(newEmployee.personalInfo[word]);
  }
  if(Object.keys(newEmployee.personalInfo.address).includes(word)) {
    setInfo(newEmployee.personalInfo.address[word]);
  }
  if(Object.keys(newEmployee.employmentDetails).includes(word)) {
    setInfo(newEmployee.employmentDetails[word]);
  }
  if(Object.keys(newEmployee.employmentDetails.manager).includes(word)) {
    setInfo(newEmployee.employmentDetails.manager[word]);
  }
  
  if(info.length===0){
    info.push("Klucz nie istnieje")
  }

  console.log(info.join(", "));

  if(!word){
    resultTag.innerHTML=""
  }else{
    resultTag.innerHTML=info.join(", ")
  }
  
};


input.addEventListener("input", handleInput);