//new itemManager
let outfitManager = new outfitController();

// DOM variables
let outfitList = document.getElementById("outfitList");
let outfitRows = document.getElementById("outfitRows");
let addOutfitButton = document.getElementById("addOutfitButton");

//add outfit to outfitList
const addItemToOutfitList = (outfit) => {
  let newRow = document.createElement('tr');
  newRow.innerHTML = 
  `<tr>
    <th id='row'><img class='img-thumbnail' src='${outfit.picUrl}'></th>
    <td>${outfit.price}</td>
    <td>${outfit.nameDescription}</td>
  </tr>`;

  //add new row with item to table
  outfitRows.append(newRow);


};





addOutfitButton.addEventListener("click", function(event){
  event.preventDefault();
  let outfitURL = document.getElementById("outfitUrl");
  let outfitPrice = document.getElementById("outfitPrice");
  let outfitNameDescription = document.getElementById("outfitNameDescription");

  outfitManager.addOutfit(outfitURL.value, outfitPrice.value, outfitNameDescription.value);
  addItemToOutfitList({
      picUrl: outfitURL.value,
      price: outfitPrice.value,
      nameDescription: outfitNameDescription.value
      
  });

  outfitURL.value = '';
  outfitPrice.value = '';
  outfitNameDescription.value = '';
})