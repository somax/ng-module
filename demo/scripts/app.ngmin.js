define(['controllers/main'], ngModule('ngModuleApp', function (module, MainCtrl) {
  'use strict';
  //		angular.module(module.name)
  module.run(function ($rootScope) {
    if (!$rootScope.loadedModules) {
      $rootScope.loadedModules = [];
    }
    $rootScope.loadedModules.push(module.name);
    console.log(module, MainCtrl);
  });
}));