class outfitController {
  constructor(currentId = 0 ){
    this.currentId = currentId;
    this.outfitArr = [];
  }

  addOutfit(picUrl, price, nameDescription) {
    let newOutfit = {
      id: this.currentId++,
      picUrl,
      price,
      nameDescription      
    }

    this.outfitArr.push(newOutfit);
    this.setLocalStorage();
  }

  setLocalStorage() {
    let storeOutfit = JSON.stringify(this.outfitArr);
    localStorage.setItem('outfit', storeOutfit);
    let currentId = JSON.stringify(this.currentId);
    localStorage.setItem('currentId', currentId);
  }

  loadLocalStorage() {
    if(localStorage.getItem('outfit')) {
      let outfitArrayJson = localStorage.getItem('outfit');
      console.log(outfitArrayJson);
      console.log(JSON.parse(outfitArrayJson));
      this.outfitArr = JSON.parse(outfitArrayJson);
    }
    
    if(localStorage.getItem('currentId')) {
      let currentIdString = localStorage.getItem('currentId');
      this.currentId = Number(currentIdString);
    }
  };

};


console.log(JSON.stringify(this.outfitArr))

// let newOutfit = new outfitController();
// newOutfit.addOutfit('someUrl',15, 'dress red');
// console.log(newOutfit)