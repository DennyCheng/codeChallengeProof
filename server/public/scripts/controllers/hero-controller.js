myApp.controller('HeroController', ['$scope', '$http', function ($scope, $http) {
  console.log("hello from heroController");
  $scope.hero = []; 
  $scope.newHero = {};
  $scope.displayHeroId = '';

$scope.abilities = [
  "invisibility","flight","super speed","heat vision", "super strength", "accelerated healing",
  "power blast","animal affinity"]
  // getBooks();

  /** --- Scoped functions -- **/
  $scope.submitNewHero = function () {
    var data = $scope.newHero;
    data.superAbility = $scope.superAbility
    console.log(data);
    $http.post('/heros', data)
      .then(function () {
        console.log('POST /heros', data);
      });
  };



}]);
