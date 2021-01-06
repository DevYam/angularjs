let app = angular.module("myApp",[]);

app.controller("myController", ($scope)=>{
    $scope.message = "Angular js is awesome";
    $scope.img={
        name : "Teaching",
        path : "img/yt.svg"
    }
})