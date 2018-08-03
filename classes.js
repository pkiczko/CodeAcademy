class HospitalEmployee {
  constructor(name) {
    this._name = name;
    //this._department = department;
    this._remainingVacationDays = 20;
    //this._insurance = insurance;
  }
  get name(){return this._name;}
  //get department(){return this._department;}
  get remainingVacationDays(){return this._remainingVacationDays;}
  takeVacationDays(daysOff){this._remainingVacationDays-=daysOff;}
}

class Doctor {
  constructor(name, insurance) {
    this._name = name;
    //this._department = department;
    this._remainingVacationDays = 20;
    this._insurance = insurance;
  }
  get name(){return this._name;}
  //get department(){return this._department;}
  get remainingVacationDays(){return this._remainingVacationDays;}
  takeVacationDays(daysOff){this._remainingVacationDays-=daysOff;}
}
class Nurse {
  constructor(name, cert) {
    this._name = name;
    //this._department = department;
    this._remainingVacationDays = 20;
    this._certifications = cert;
  }
  get name(){return this._name;}
  //get department(){return this._department;}
  get remainingVacationDays(){return this._remainingVacationDays;}
  takeVacationDays(daysOff){this._remainingVacationDays-=daysOff;}
  addCertification(certification){
    this._certifications.push(certification);
  }
}

/*const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);*/
