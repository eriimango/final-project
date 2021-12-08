class outfitController {
  constructor(currentId = 0, ){
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
    let storeOutfit = JSON.stringify(this.outfit);
    localStorage.setItem('outfit', storeOutfit);
    let currentId = JSON.stringify(this.currentId);
    localStorage.setItem('currentId', currentId);
  }

  loadLocalStorage() {
    if(localStorage.getItem('outfit')) {
      
    }
    
    if(localStorage.getItem('currentId')) {

    }
  };

};




let newOutfit = new outfitController();
newOutfit.addOutfit('someUrl',15, 'dress red');
console.log(newOutfit)