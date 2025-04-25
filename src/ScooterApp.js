// require the User and Scooter classes - see where they can be used in ScooterApp.js

const Scooter = require('./Scooter');
const User = require('./User');

class ScooterApp {
  constructor() {
    this.stations = {
      "Barclays HQ": [],
      "Canary Wharf": [],
      "London Bridge": []
    };
    this.registeredUsers = {};
  }


  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error('already registered')
    }
    if (age < 18) {
      throw new Error('too young to register')
    }

    const user = new User(username, password, age);
    this.registeredUsers[username] = user;
    console.log('User has been registered');
    return user;
  }


  loginUser(username, password) {
    const user = this.registeredUsers[username];

    if (!this.registeredUsers[username]) {
      throw new Error('username or password is incorrect')
    }
    try {
      user.login(password);
      console.log('User has been logged in')
    } catch (err) {
      throw new Error('username or password is incorrect')
    }
  }


  logoutUser(username) {
    try {
      const user = this.registeredUsers[username];
      user.logout(username)
      console.log('User is logged out')
    } catch (err) {
      console.log('User is not logged in')
    }


    createScooter(station) {
      if (!this.stations[station]) {
        throw new Error('no such station')
      }
    }
  }
}

module.exports = ScooterApp
