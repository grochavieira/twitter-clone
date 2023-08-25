class UserSingleton {
    constructor() {
      if (!UserSingleton.instance) {
        this.data = {};  // Inicialize qualquer estado aqui
        UserSingleton.instance = this;
      }
      return UserSingleton.instance;
    }
  
    setData(key, value) {
      this.data[key] = value;
    }
  
    getData(key) {
      return this.data[key];
    }
  }
  