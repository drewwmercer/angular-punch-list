'use strict';

angular
  .module('punchlistApp.controller', [])
  .controller('punchlistController', [
    "$scope", "$filter",
    function($scope, $filter) {
      $scope.newTask = '';

      $scope.pendingCount = 3;

      $scope.taskList = [
        { description: 'Tighten bracket - upstairs bonus', done: false },
        { description: 'Fix nail pops - upstairs bonus', done: false },
        { description: 'Re-grout tile - upstairs bonus', done: false }
      ];

      $scope.addPunch = function() {
          $scope.taskList.push({description: $scope.newTask, done:false});
          $scope.newTask = "";
      };

      $scope.deletePunch = function(index) {
        $scope.taskList.splice(index, 1);
      };

      $scope.$watch('taskList', function() {
        $scope.pendingCount = $filter('filter')($scope.taskList, {done: false}).length;
      }, true)

      $scope.clearCompleted = function() {
          $scope.taskList = $filter('filter')($scope.taskList, {done: false});
      }
    }
  ]);
