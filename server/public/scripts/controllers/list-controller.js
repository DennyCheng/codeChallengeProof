myApp.controller('ListController', ['$scope', '$http',function ($scope, $http) {
console.log("hello from listController");

getHeroes();

function getHeroes() {
  $http.get('/heros')
    .then(function (response) {
      console.log('GET /heroes', response.data);

      var heroArray = response.data;
      console.log('heroes array',heroArray);

      $scope.heroes = heroArray;
    });
}

$scope.deleteHero = function(id){
  console.log("hero id",id)
  $http.delete('/heros/' + id)
    .then(function () {
      console.log('DELETE /heroes/', id);
      getHeroes();
      //repopulates the heros list with updated list
    });
};



}]);
