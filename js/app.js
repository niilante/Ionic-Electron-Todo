// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.service('Tasks', function(){
  var tasks = [
    {
      "title": "Walk the dog"
    },
    {
      "title": "Mow the lawn"
    },
    {
      "title": "Wash the car"
    }
  ];

  return {
    all: function() {
      return tasks;
    },
    add: function(title) {
      tasks.push({
        "title": title
      });
    },
    remove: function(task) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  };
})

.controller('TodoController', function($scope, $ionicPopup, Tasks){
  $scope.tasks = Tasks.all();

  $scope.data = {};

  $scope.addTask = function () {
    $ionicPopup.show({
      template: '<input type="text" placeholder="Task: " ng-model="data.model" style="border-radius: 5px; padding: 5px;">',
      title: 'Enter a Task',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Add</b>',
          type: 'button-positive',
          onTap: function(e) {
            Tasks.add($scope.data.model);
          }
        }
      ]
    })
  }

  $scope.remove = function(task) {
    Tasks.remove(task);
  }
}); 