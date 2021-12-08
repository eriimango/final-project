class outfitController {
  constructor(currentId = 0, ){
    this.currentId = currentId;
    this.outfitArr = [];
  }

  addItem(picUrl, price, nameDescription) {
    let newOutfit = {
      id: this.currentId++,
      picUrl,
      price,
      nameDescription      
    }

    this.outfitArr.push(newOutfit)
  }

}

let newOutfit = new outfitController();
newOutfit.addItem('someUrl',15, 'dress red');
console.log(newOutfit)