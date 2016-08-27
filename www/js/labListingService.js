(function () {
  'use strict';

  angular
    .module('app.core', ['firebase'])
    .factory('doctorListingService', firebaseDataService);

  firebaseDataService.$inject = ['$firebase'];

  function doctorListingService($firebase) {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDMG2E33TnJiKETQ3Vttckn3kzNXH1sDbw",
      authDomain: "doctorlabs-fc212.firebaseapp.com",
      databaseURL: "https://doctorlabs-fc212.firebaseio.com/doctors",
      storageBucket: "doctorlabs-fc212.appspot.com",
    };
    myFirebase = firebase.initializeApp(config);

    var service = {
      ref: function() { return myFirebase.database().ref},
      users:function () {return myFirebase.database().ref('users/')},
      labs: myFirebase.database().ref('labs/'),
      doctors: myFirebase.database().ref('doctors/')
    };

    return service;
  }

})();

      // Initialize Firebase
  /*var config = {
    apiKey: "AIzaSyDMG2E33TnJiKETQ3Vttckn3kzNXH1sDbw",
    authDomain: "doctorlabs-fc212.firebaseapp.com",
    databaseURL: "https://doctorlabs-fc212.firebaseio.com",
    storageBucket: "doctorlabs-fc212.appspot.com",
  };
  firebase.initializeApp(config);*/
