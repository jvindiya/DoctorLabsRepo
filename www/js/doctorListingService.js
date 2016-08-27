(function () {
  'use strict';
  angular
    .module('doctorlabs.services', [])
    .factory('doctorListingService', doctorListingService);
  doctorListingService.$inject = ['$firebaseArray'];

  //constructor and initialize
  function doctorListingService($firebaseArray) {
    var myFirebase = '';
    myFirebase = new Firebase("https://doctorlabs-fc212.firebaseio.com");

    var service = {
      doctor: function Doctor() {
        this.name = '';
        this.phoneNo = '';
        this.clinicName = '';
        this.clinicAddress = '';
        this.clinicPhoneNo = '';
        this.qualification = '';
        this.area = '';
        this.city = '';
      },

      //all: function () { return $firebaseArray(ref('doctors')) },

      addDoctor: function (doctorValue) {
        console.log('called');
        var obj = $firebaseArray(myFirebase.child('doctors'));
        obj.$loaded()
          .then(function () {
            var rec = obj.$getRecord('u002');
            console.log(rec);
          })
      }
      //var doctorId = 'u002';
      //return myFirebase.ref('doctors/' + doctorId).set(
      //doctorValue
      //);
    //}
  };
  return service;
}

})();
