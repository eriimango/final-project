class regController {
    constructor(currentId = 0, ){
      this.currentId = currentId;
      this.regArr = [];
    }
  
    addUser (Email, Password, FirstName, LastName, ContactNumber) {
      let newUser = {
        id: this.currentId++,
        Email,
        Password,
        FirstName,
        LastName,
        ContactNumber      
      }
  
      this.regArr.push(newUser);
      this.setLocalStorage();
    }
  
    setLocalStorage() {
      let storeUser = JSON.stringify(this.regArr);
      localStorage.setItem('User', storeUser);
      let currentId = JSON.stringify(this.currentId);
      localStorage.setItem('currentId', currentId);
    }
  
    loadLocalStorage() {
      if(localStorage.getItem('User')) {
        let reqArrayJson = localStorage.getItem('User');
        console.log(reqArrayJson);
        console.log(JSON.parse(reqArrayJson));
        this.User = JSON.parse(reqArrayJson);
      }
      
      if(localStorage.getItem('currentId')) {
        let currentIdString = localStorage.getItem('currentId');
        this.currentId = Number(currentIdString);
      }
    };
  
  };
  
  
  