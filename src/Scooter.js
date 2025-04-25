let serial = 1

class Scooter {

  static nextSerial = 1;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }


  rent(user) {
    if (this.charge > 20 && this.isBroken == false) {
      this.station = null;
      this.user = user;
    } else if (this.charge > 20 && this.isBroken == true) {
      throw new Error ('scooter needs repair.')
    } else if (this.charge <= 20) {
      throw new Error ('scooter needs to charge.')
    }
  }


  dock(station) {
    this.station = station;
    this.user = null;
  }

  
}


module.exports = Scooter
