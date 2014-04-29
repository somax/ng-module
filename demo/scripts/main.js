/*jshint unused: vars */
require.config({
	paths: {
		'angular': '../bower_components/angular/angular.min',
		'ngModule': '../../src/ng-module'
	},
	shim: {
		'angular': {'exports': 'angular'},
		'angular-route': ['angular'],
		'angular-mocks': {
			deps: ['angular'],
			'exports': 'angular.mock'
		}
	},
	priority: [
		'angular'
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
	'angular',
	'ngModule',
	'app'
], function (angular, ngModule ,app) {
	'use strict';

	angular.element().ready(function () {
		angular.resumeBootstrap([app.name]);
	});
});