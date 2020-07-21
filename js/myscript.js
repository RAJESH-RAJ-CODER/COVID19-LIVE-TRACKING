//alert("Testing");
const URL ="http://covid.mathdro.id/api";

var app = angular.module('myApp', []);
app.controller('myCtrl',($scope, $http)=> {
  $scope.title = "Stay Home Stay Safe";
  //$scope.lastName = "Doe";
 $http.get(URL).then(
 (response)=>{
     //success
     $scope.all_data=response.data;
 }
 );

 // get country Data
 $scope.get_c_data=()=>{
     //control.log($scope.c);
     let country=$scope.c;
     if(country==" "){
     $scope.c_data=undefined;
     return;

 }
 $http.get(`${URL}/countries/${country}`)
 .then((response)=>{
     console.log(response.data);
     $scope.c_data=response.data;
 },(error)=>{
     console.log(error);
 }
     
 )
};
});
