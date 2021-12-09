//new itemManager
let regManager = new regController();

// DOM variables
// let outfitList = document.getElementById("outfitList");
// let outfitRows = document.getElementById("outfitRows");
let addUserButton = document.getElementById("addUserButton");

//add outfit to outfitList
const addItemToUserList = (User) => {
  let newRow = document.createElement('tr');
  newRow.innerHTML = 
  `<tr>
    <th id='row'><img class='img-thumbnail' src='${User.Email}'></th>
    <td>${User.Password}</td>
    <td>${User.FirstName}</td>
    <td>${User.LastName}</td>
    <td>${User.ContactNumber}</td>
  </tr>`;


  //add new row with item to table
//   outfitRows.append(newRow);


};





addRegButton.addEventListener("click", function(event){
  event.preventDefault();
  let regEmail = document.getElementById("regEmail");
  let regPassword = document.getElementById("regPassword");
  let regFirstName = document.getElementById("regFirstName");
  let regLastName = document.getElementById("regLastName");
  let regContactNumber = document.getElementById("regContactNumber");

  regManager.addUser(regEmail.value, regPassword.value, regFirstName.value,regLastName.value,regContactNumber.value);
  addItemToOutfitList({
      Email: regEmail.value,
      Password: regPassword.value,
      FirstName: regFirstName.value,
      LastName: regLastName.value,
      ContactNumber: regContactNumber.value

      
  });
  regEmail.value='', 
  regPassword.value='', 
  regFirstName.value='',
  regLastName.value='',
  regContactNumber.value=''

})