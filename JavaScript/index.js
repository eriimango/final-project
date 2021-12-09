//new itemManager
let outfitManager = new outfitController();

// DOM variables
let outfitList = document.getElementById("outfitList");
let outfitRows = document.getElementById("outfitRows");
let addOutfitButton = document.getElementById("addOutfitButton");

outfitManager.loadLocalStorage();

const renderListFromLocal = () => {
  // we want to loop through our array and display each item from local storage by adding it to our last
  let outfitArray = outfitManager.outfitArr;

  for (let i = 0; i < outfitArray.length; i++) {
    let newRow = document.createElement('tr');
    newRow.setAttribute('data-id', outfitArray[i].id);
    newRow.innerHTML = 
    `<th id='row'><img class='img-thumbnail' src='${outfitArray[i].picUrl}'></th>
     <td>${outfitArray[i].price}</td>
     <td>${outfitArray[i].nameDescription}</td>
    `
    outfitRows.append(newRow);
  }
}

renderListFromLocal();

addOutfitButton.addEventListener("click", function(event){
  event.preventDefault();
  let outfitURL = document.getElementById("outfitUrl");
  let outfitPrice = document.getElementById("outfitPrice");
  let outfitNameDescription = document.getElementById("outfitNameDescription");

  outfitManager.addOutfit(outfitURL.value, outfitPrice.value, outfitNameDescription.value);
  outfitRows.innerHTML = '';
  renderListFromLocal();
  
  outfitURL.value = '';
  outfitPrice.value = '';
  outfitNameDescription.value = '';
})


