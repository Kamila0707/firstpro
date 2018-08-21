
app.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http', '$scope'];
 
 function MainCtrl($http, $scope) {
 	 var vm = this;
   // vm.objecToEdit = null;
   // vm.pages = [];
   // vm.page = 1;
   // vm.end = 5;
   // vm.allpages;
   // vm.count
   vm.current_page = 1;
   vm.pages = [];
   vm.all_pages = [];
   vm.count;

      
 // $http.get('/api/post/home/' + page)
 //      .success(function(response) {
 //       vm.posts = response.posts;
 //       vm.allpages = Math.ceil(response.count/5);
 //       if(vm.allpages < vm.end) {
 //         vm.pages = new Array(vm.allpages - vm.page);
 //       } else {
 //          vm.page = page;
 //          vm.pages = new Array(vm.end - (vm.page - 1));
 //       }
 //       vm.count = response.count;
 //   })
 //    .error(function(err) {
 //      console.log(err);
      
 //    });
 //  }


  $http.get('/api/post/home/' + vm.current_page)
   .success(function(response) {
       vm.posts = response.posts;
       vm.count = response.count;
       console.log(response)
       vm.all_pages_count = Math.ceil(vm.count/ 5);
       vm.all_pages = new Array(vm.all_pages_count);
       for(var i = 0; i < vm.all_pages.length; i++) {
          vm.all_pages[i] = i;

          }
       vm.pages = vm.all_pages.slice(0, 5);
       
       console.log(vm.all_pages_count)
       })
      .error(function(err) {
    	console.log(err);
    	
    });
      vm.nextPage = function() {
        if(vm.current_page %5 == 0 && vm.current_page < vm.all_pages_count) {
           vm.pages = vm.all_pages.slice(vm.current_page, vm.all_page + 5);
         vm.current_page ++;
       } else if(vm.current_page < vm.all_pages_count) {
          vm.current_page ++;
          vm.getPosts();
    
       }
        // body...
      }

       vm.prevPage = function() {
        if((vm.current_page - 1) %5 == 0 && vm.current_page > 1) {
          vm.current_page --;
           vm.pages = vm.all_pages.slice(vm.current_page - 5,  vm.current_page);
         vm.current_page ++;
       } else if(vm.current_page > 1) {
          vm.current_page --;
          vm.getPosts();
      }
   }
   vm.setPage = function (page) {
      vm.current_page --;
      vm.getPosts();
   }
  vm.getPosts = function () {
     $http.get('/api/post/home/' + vm.current_page)
       .success(function(response) {
           vm.posts = response.posts;
         // body...
       })
       .error(function(err) {
         console.log(err);
       })
  }


  vm.savePost = function() {
    console.log(vm.file);
    var data  = new FormData();
    data.append('title', vm.title);
    data.append('content', vm.content);
    data.append('author', vm.author);
    data.append('file', vm.file);

    $http.post('/api/post', data,
     {
      headers: {'Content-Type': undefined},
      transformRequest: angular.identity
  })
  .success(function(response) {
    vm.posts.push(response)

  })
  .error(function(err) {
     console.log(err);
  })
}

 	//vm.savePost = function() {
 	 //	var data = {
 	 		//title: vm.title,
 	 		//content: vm.content,
 	 		//author: vm.author
 	 	//}
		
		//$http.post('/api/post', data)
		//.success(function(response){
		//	vm.posts.push(response);
		//})
		//.error(function(err) {
			//console.log(err);
		//})
 //	}

     vm.deletePost = function(post) {
       $http.delete('/api/post/' + post._id)
         .success(function(response) {
           var index = vm.posts.findIndex(function(item) {
           	 return item._id === post._id
           })
            vm.posts.splice(index, 1);
         })
         .error(function(err) {
         	 console.log(err);
         })
	}
  vm.makeEditable = function(post) {
      vm.objecToEdit = post;

  }
  vm.closemodal = function() {
     vm.objecToEdit = null;
  }
  vm.editPost = function() {
     $http.put('/api/post', vm.objecToEdit)
       .success(function(response){
          console.log(response);

       }).error(function(error){
          console.log(error);
       });
    
  }
    vm.cancelComment = function(index, comment) {
      $http.put('/api/post', vm.objecToEdit)
       .success(function(response){
          console.log(response);

       }).error(function(error){
          console.log(error);
       });
  }
   vm.setLike = function(id, index) {
      $http.put('/api/post/like/' + id)
         .success(function(response) {
            vm.posts[index] = response;
        })
         .error(function(err) {
            console.log(err);
         })
   }
}	 
	

 