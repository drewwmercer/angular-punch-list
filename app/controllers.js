'use strict';

angular
  .module('punchlistApp.controller', [])
  .controller('punchlistController', [
    "$scope",
    function($scope) {
      $scope.newTask = '';

      $scope.taskList = [
        { description: 'Tighten bracket - upstairs bonus', done: false },
        { description: 'Fix nail pops - upstairs bonus', done: false },
        { description: 'Re-grout tile - upstairs bonus', done: false }
      ];

      $scope.addPunch = function() {
          $scope.tasklist.push({description: $scope.newTask, done:false});
          $scope.newTask = "";
      };

      $scope.deletePunch = function(index) {
        $scope.tasklist.splice(index, 1);
      };
    }
  ]);
