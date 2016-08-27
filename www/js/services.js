angular
  .module('doctorlabs.services', ['app.core'])

  .factory('DoctorsListService', DoctorsListService);

DoctorsListService.$inject = ['firebaseDataService'];

function DoctorsListService(firebaseDataService) {
  var service = {
    doctor: Doctor,
    addDoctor: addDoctor,
    findDoctorByName: findDoctorByName
  };
  return service;

  function Doctor() {
    this.name = '';
    this.phoneNo = '';
    this.clinicName = '';
    this.clinicAddress = '';
    this.clinicPhoneNo = '';
    this.qualification = '';
    this.area = '';
    this.city = '';
  }

  //Function to add Doctors
  function addDoctor(Doctor) {
    //console.log(firebaseDataService);
    var doctorID = 'u001';
    firebaseDataService.ref().child('users/'+ doctorID).set({
      Doctor
    });
    //var doctor = JSON.stringify(Doctor);
    //console.log(doctor);
    //console.log($firebase);
    //parties = doctorRef
  };

  //Find doctors by name
  function findDoctorByName() {
    //Call FireBase query and return the doctors list whose name matches the set name
    var doctorlistNameMath = [{
      name: "Vijay"
    }]
    return doctorlistNameMath;
  }
}
