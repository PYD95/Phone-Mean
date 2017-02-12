function appctrl($scope, $http) {
  $http.get('/contactlist').success(function(response) {
    $scope.contactlist = response;
  });
}
