app.controller('FilterCtrl', FilterCtrl);

FilterCtrl.$inject = ['$http', '$scope', '$state', '$rootScope'];
 
function FilterCtrl($http, $scope, $state, $rootScope) {
 	 var vm = this;

 	vm.employes = [
 	 {
 	 	name: 'Kamila',
 	 	surname: 'Oryngaliyeva',
 	 	age: 25, 
 	 	position: 'Student',
 	 	date: new Date()
 	 },
     {
 	 	name: 'Ian',
 	 	surname: 'Curtis',
 	 	age: 27, 
 	 	position: 'Singer',
 	 	date: new Date()
 	 },
 	 {
 	 	name: 'Edward',
 	 	surname: 'Norton',
 	 	age: 45, 
 	 	position: 'Actor',
 	 	date: new Date()
 	 },
 	 {
 	 	name: 'Thom',
 	 	surname: 'Yorke',
 	 	age: 45, 
 	 	position: 'Writer',
 	 	date: new Date()
 	 },
 	 {
 	 	name: 'David',
 	 	surname: 'Linch',
 	 	age: 65, 
 	 	position: 'Movie-maker',
 	 	date: new Date()
 	 },
 	 {
 	 	name: 'Darren',
 	 	surname: 'Aronofski',
 	 	age: 45, 
 	 	position: 'Film director',
 	 	date: new Date()
 	 },
 	 {
 	 	name: 'Evgen',
 	 	surname: 'Bajenov',
 	 	age: 25, 
 	 	position: 'Blogger',
 	 	date: new Date()
 	 },
 	 {
 	 	name: 'Pedro',
 	 	surname: 'Almodovar',
 	 	age: 65, 
 	 	position: 'Film-director',
 	 	date: new Date()
 	 },
 	 {
 	 	name: 'Xavier',
 	 	surname: 'Dolan',
 	 	age: 28, 
 	 	position: 'Film-director',
 	 	date: new Date()
 	 },
 	 {
 	 	name: 'Aaron',
 	 	surname: 'Paul',
 	 	age: 35, 
 	 	position: 'Actor',
 	 	date: new Date()
 	 }
 	 
 	];
   vm.setFilter = function(filter) {
   	if(!vm.filter) {
   		vm.filter = filter;
       return;
	}

   	if(vm.filter.includes(filter) && vm.filter[0] != '-') {
       	vm.filter = '-' + filter;
   	} else {
   		vm.filter = filter;
   	}
   	
   }

}