/**
 * Created by maxiaojun on 14-4-26.
 * MyService
 */
define([], ngModule('ngModule.services.MyService', function (module) {
		'use strict';
		angular.module(module.name)
			.run(function ($rootScope) {
				if(!$rootScope.loadedModules){
					$rootScope.loadedModules = [];
				}
				$rootScope.loadedModules.push(module.name)
			})
			/* run config value constant controller filter directive factory service provider animation*/
			.value('myValue', 'my Value!!!!');
	})
);
