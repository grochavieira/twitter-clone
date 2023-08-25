if (typeof singleton === 'undefined') {
    var singleton = new UserSingleton();
} 
singleton.setData('message', 'Olá do Home!');
console.log(singleton);