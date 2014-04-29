(function(global) {
	'use strict';

	/**
	 * ngModule: define a angulerJs module with requierJs define()
	 * @param  {string}   ngModuleName name for ngModule
	 * @param  {Function} callback     code for ngModule
	 * @return {object}                a object, contains 'ngName' and 'ngModule'
	 *
	 * @example define(
	 *          ['a','b'],// dependencie
	 *          ngModule(
	 *          	'moduleName', // moduleName
	 *           	function (module,a,b) {
	 *          	 	angular.module(module.name) //其实返回的就是module，但是这样写 ngmin 才能正确处理。
	 *          		.controller(...)
	 *          	 	.directive(...)
	 *             	}
	 *          )
	 */
	var ngModule = function(ngModuleName, callback) {

		/**
		 * isNgModule: 检查是否是 angulerjs module
		 * @param  {Object}  _module
		 * @return {Boolean}
		 */
		function isNgModule(_module) {
			return ((typeof _module === 'object') && _module.hasOwnProperty('name') && _module.hasOwnProperty('controller') && _module.hasOwnProperty('factory'));
		}

		/**
		 * 返回供给 define的回调函数
		 * @return {[type]} [description]
		 */
		return function() {
			if (!window.angular) {
				throw Error('Need to load the AngularJs first!')
			}
			// 所有 defined 加载的依赖库
			var dependencieModules = Array.prototype.slice.call(arguments, 0);

			// 取出angular module的模块名称列表
			var ngDependencies = [];
			angular.forEach(dependencieModules, function(_module) {
				if (isNgModule(_module)) {
					ngDependencies.push(_module.name);
				}
			});

			// 定义angular module
			var ngModule;
			try {
				ngModule = angular.module(ngModuleName);
			} catch (e) {
				ngModule = angular.module(ngModuleName, ngDependencies);
			}

			// 将本身和依赖库合并，传入回调函数
			dependencieModules.unshift(ngModule);
			callback.apply(this, dependencieModules);

			return ngModule;
		};
	};

	// 暴露到全局
	global.ngModule = ngModule;

})(this);