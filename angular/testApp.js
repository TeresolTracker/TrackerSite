
var myapp = angular.module('app', []);
myapp.controller('UserController',function($scope,$http){
		$http.get("angular/data1.json").success(function(response){
		$scope.user=response;
		});
		}); 

myapp.controller('carHireController', ['$scope','$http', carHireController]);

function carHireController($scope, $http) {
    $scope.search = {};
    $scope.search.company = '';
    $http.get('angular/data1.json').success(function(data) {
        $scope.results = data.results;
		
		$scope.filtercar1 = function(results)
		{
       if(results.company.name == "Atlas Choice")
	   {
		  return true; 
	   }
	   return false;
		};
		 
	   $scope.filtercar2 = function(results)
		{
	   if(results.company.name == "Holiday Autos")
	   {
		  return true;   
	   }
	   return false;
		};
	   
	   $scope.filtercar3 = function(results)
		{
	   if(results.company.name == "Avis")
	   {
		  return true;   
	   }
	   return false;
		};
		
		$scope.filtercar4 = function(results)
		{
	   if(results.company.name == "Honda")
	   {
		  return true;   
	   }
	   return false;
		};
		
    }).error(function(data, status, headers, config) {
	console.log('error');
  });
};



// App.controller('mycontroller' ,function($scope, $http){
//      	 $scope.carts = {
//     "binaries": [
//         {
//             "fileLocation": "http://images.clipartpanda.com/sports-equipment-clipart-black-and-white-soccer-ball-hi.png",
//             "username": "testuser3",
//             "description": "The company required the 28-year-old's help on a matter the directors felt could affect the share price: its Wikipedia page. Short, uninteresting ."
//         }
//     ]

// }; 
// });
 /* App.controller('MapController', function ($scope) {
              
              var mapOptions = {
                  zoom: 4,
                  center: new google.maps.LatLng(25,80),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.place
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + 
                        marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
              for (i = 0; i < cities.length; i++){
                  createMarker(cities[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });
 */