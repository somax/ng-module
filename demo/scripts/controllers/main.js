define(['services/myservice'], ngModule('ngModuleApp.controllers.MainCtrl', function (module,myService) {
		'use strict';

		angular.module(module.name)
			.run(function ($rootScope,myValue) {
				console.log($rootScope,myValue)
//				myService.value('myValue','my value!!')
				if(!$rootScope.loadedModules){
					$rootScope.loadedModules = [];
				}
				$rootScope.loadedModules.push(module.name)
			})
			.controller('MainCtrl', function ($rootscope,myValue) {
				console.log(myValue)
				$scope.awesomeThings = [
					'HTML5 Boilerplate',
					'AngularJS',
					'Karma'
				];
			});
	})
);
