angular.module('doctorlabs.controllers', ['doctorlabs.services'])

  .controller('PatientRefCtrl', function ($scope) {

  })

  .controller('FindCtrl', function ($scope, $stateParams, doctorListingService) {

    var doctorToAdd = new doctorListingService.doctor();

    doctorToAdd.name = 'vindiya';
    doctorToAdd.phoneNo = '988776655';
    doctorToAdd.clinicName = 'Vijay Clinic';
    doctorToAdd.clinicAddress = 'Clinignaddrss res sisser ewetrgs werwe, werwerew@ sdefsdf, 2sefgsd';
    doctorToAdd.clinicPhoneNo = '+91 9994394949';
    doctorToAdd.qualification = 'MBBS MD';
    doctorToAdd.area = 'Kodambakkam';
    doctorToAdd.city = 'Chennai';

    doctorListingService.addDoctor(doctorToAdd);

    //console.log(doctorListingService.all());

    $scope.newTask = function () {
      console.log("hello");
      console.log($scope.nameOfDoctor);
    };
  })

  .controller('ServicesOfferedCtrl', function ($scope, $stateParams, Chats) {
  })

  .controller('AboutMeCtrl', function ($scope, stateParams) {
  });
