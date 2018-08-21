app.controller('TableCtrl', TableCtrl);

TableCtrl.$inject = ['$http', '$scope', '$state', '$rootScope'];
 
function TableCtrl($http, $scope, $state, $rootScope) {
 	 var vm = this;

 	vm.movies = [
 	 {
 	 	name: 'The Fight Club',
 	 	genre: 'Fantastic',
 	 	year: 2001, 
 	 },
     {
 	 	name: 'Lord of Rings',
 	 	genre: 'Fantastic',
 	 	year: 2003, 
 	 },
 	 {
 	 	name: 'Sleepy Hollow',
 	 	genre: 'Detective',
 	 	year: 2005, 
 	 },
 	 {
 	 	name: 'True Detective',
 	 	genre: 'Detective',
 	 	year: 2015, 
 	 },
 	 {
 	 	name: 'Orange is the new black',
 	  genre: 'drama',
 	 	year: 2011, 
 	 },
 	 {
 	 	name: 'Game of thrones',
 	 	genre: 'Fantastic',
 	 	year: 2011, 
 	 },
 	 {
 	 	name: 'Closer',
 	 	genre: 'drama',
 	 	year: 2005, 
 	 },
 	  
 	];
  

  vm.delete = function(index) {
    vm.movies.splice(index, 1); 
  }
}
