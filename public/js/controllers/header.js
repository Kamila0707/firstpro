app.controller('HeaderCtrl', HeaderCtrl);

HeaderCtrl.$inject = ['$http', '$scope', '$cookies', '$rootScope', '$state'];
 
 function HeaderCtrl($http, $scope, $cookies, $rootScope, $state) {
 	 var vm = this;
 	
 	if($cookies.getObject('session')) {
 		$rootScope.session = $cookies.getObject('session');
 	}

 	vm.logout = function() {
 	 	$http.post('/api/logout')
 	 	 .success(function(response) {
 	 	 	$rootScope.session = undefined;
 	 	 	$state.go('home');

 	 	 })
 	 	 .error(function(err) {
 	 	 	 console.log(err);
 	})
 	 	}

 	 	vm.search = function () {
 	 		// var my_regExp = new RegExp(`${vm.search_text}`,`i`)
 	 		// console.log(my_regExp.test('Hello World!!!'));
 	 		if(!vm.search_text) {
 	 			return
 	 		}

 	 		$http.get('/api/post/search/' + vm.search_text)
 	 		 .success(function(response) {
 	 		 	 vm.search_result = response;
 	 		 })
 	 		 .error(function(err) {
 	 		 	console.log(err);
 	 		 })
 	 	}
 	 }


      

 	 	